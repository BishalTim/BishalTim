using eTickets.Data.Base;
using eTickets.Data.ViewModels;
using eTickets.Models;

public interface IMoviesService : IEntityBaseRepository<Movie>
{
    Task<Movie> GetMovieByIdAsync(int id);
    Task<NewMovieDropdownsVM> GetNewMovieDropdownsValues();
    Task AddNewMovieAsync(NewMovieVM data);
    Task UpdateMovieAsync(NewMovieVM data);
    Task DeleteMovieAsync(int id);
}
