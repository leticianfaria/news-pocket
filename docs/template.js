export function intro() {
  return `
  <div class="intro">
    <div class="mask"></div>
    <h1>SAVE YOUR FAVORITE NEWS ANYTIME</h1>
    <a class="btn" href="/topnews">TOP NEWS</a>
  </div>
  <section class="links">
  <h1>CATEGORIES</h1>
    <div class="links-content">
    <a title="Technology" href="/news/technology"><img src="/public/assets/technology.jpg"></a>
    <a title="Movies" href="/news/movies"><img src="/public/assets/movies.jpg"></a>
    <a title="Arts" href="/news/arts"><img src="/public/assets/arts.jpg"></a>
    <a title="Politics" href="/news/politics"><img src="/public/assets/politics.jpg"></a>
    <a title="Books" href="/news/books"><img src="/public/assets/books.jpg"></a>  
    <a title="Business" href="/news/business"><img src="/public/assets/business.jpg"></a>
    <a title="Science" href="/news/science"><img src="/public/assets/science.jpg"></a>
    <a title="Fashion" href="/news/fashion"><img src="/public/assets/fashion.jpg"></a>
    <a title="Travel" href="/news/travel"><img src="/public/assets/travel.jpg"></a>
    <a title="Automobiles" href="/news/automobiles"><img src="/public/assets/automobiles.jpg"></a>
    <a title="Health" href="/news/food"><img src="/public/assets/food.jpg"></a>
    <a title="Sports" href="/news/sports"><img src="/public/assets/sports.jpg"></a>
    </div>  
    <footer>
      <small>MADE BY <a href="https://leticianfaria.github.io/portfolio/">LETÍCIA FARIA</a></small>
    </footer>
  </section>
  `
}

export function newsItem(news) {
  return `
        <div class="item">
        <a href=${news.short_url}><img src=${news.multimedia[3].url} /></a>
        <div>
          <a href=${news.short_url}><h1>${news.title}</h1></a>
          <p>${news.abstract}</p>
          <a class="btn" target="_blank" href=${news.short_url}>READ</a>
          <a class="btn btn-cart" data-url="${news.short_url}">FAVORITE</a>
          </div>
        </div>`;
}

export function newspaperItem(i, items){
  return `
    <div class="cart-item">
    <img height="200" width="200" src=${JSON.parse(items[i]).multimedia[3].url} />
    <div>
      <h1>${i}</h1>
      <small>${JSON.parse(items[i]).abstract}</small>
    </div>
    <a class="btn btn-cart" target="_blank" href=${JSON.parse(items[i]).short_url}>READ</a> 
    <button class="remove-cart"><i  data-name="${i}" class="flaticon-remove"></i></button>
    </div>
  `
}