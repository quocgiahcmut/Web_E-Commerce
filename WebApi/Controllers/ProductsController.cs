using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Entities;
using WebApi.Repositories.UOW;

namespace WebApi.Controllers;

public class ProductsController : BaseApiController
{
    private readonly IUnitOfWork _uow;

    public ProductsController(IUnitOfWork uow)
    {
        _uow = uow;
    }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
        var products = await _uow.ProductRepository.GetAllAsync();

        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _uow.ProductRepository.GetByIdAsync(id);

        return Ok(product);
    }
}
