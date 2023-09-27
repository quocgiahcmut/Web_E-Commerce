using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using WebApi.Data;
using WebApi.Entities;
using WebApi.Extensions;
using WebApi.Helpers.RequestHelpers;
using WebApi.Repositories.UOW;

namespace WebApi.Controllers;

public class ProductsController : BaseApiController
{
    private readonly IUnitOfWork _uow;
    private readonly StoreContext _context;

    public ProductsController(IUnitOfWork uow, StoreContext context)
    {
        _uow = uow;
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<PagedList<Product>>> GetProducts([FromQuery] ProductParams @params)
    {
        var query = _context.Products
            .Sort(@params.OrderBy)
            .Search(@params.SearchTerm)
            .Filter(@params.Brands, @params.Types)
            .AsQueryable();

        var products = await PagedList<Product>.ToPagedList(query, @params.PageNumber, @params.PageSize);

        Response.AddPaginationHeader(products.MetaData);

        return products;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _uow.ProductRepository.GetByIdAsync(id);

        return Ok(product);
    }

    [HttpGet("{filters}")]
    public async Task<ActionResult> GetFilters()
    {
        var brands = await _context.Products.Select(p => p.Brand).Distinct().ToListAsync();
        var types = await _context.Products.Select(p => p.Type).Distinct().ToListAsync();

        return Ok(new { brands, types });
    }
}
