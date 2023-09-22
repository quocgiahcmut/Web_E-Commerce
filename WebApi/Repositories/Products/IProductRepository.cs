using WebApi.Entities;

namespace WebApi.Repositories.Products;

public interface IProductRepository
{
    Task<List<Product>> GetAllAsync();
    Task<Product> GetByIdAsync(int id);
}
