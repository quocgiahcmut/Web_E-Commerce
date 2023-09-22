using WebApi.Repositories.Products;

namespace WebApi.Repositories.UOW;

public interface IUnitOfWork
{
    Task<bool> Complete();
    bool HasChanges();
    
    IProductRepository ProductRepository { get; }
}
