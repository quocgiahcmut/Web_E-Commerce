using WebApi.Entities;

namespace WebApi.Repositories.Baskets;

public interface IBasketRepository
{
    Task<Basket> RetrieveBasket(string buyerId);
    Task<Basket> CreateBasket(string buyerId);
}
