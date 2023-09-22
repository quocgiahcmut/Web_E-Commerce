using WebApi.Data;
using WebApi.Repositories.Products;

namespace WebApi.Repositories.UOW;

public class UnitOfWork : IUnitOfWork
{
    private readonly StoreContext _context;
    public UnitOfWork(StoreContext context)
    {
        _context = context;
    }

    public IProductRepository ProductRepository => new ProductRepository(_context);

    public async Task<bool> Complete()
    {
        return await _context.SaveChangesAsync() > 0;
    }

    public bool HasChanges()
    {
        return _context.ChangeTracker.HasChanges();
    }
}
