
document.addEventListener('DOMContentLoaded', () => {
  const toys = [
    {
      brand: 'LEGO',
      item: 'LEGO Star Wars Millennium Falcon',
      sold: 120,
      price: '£135',
      available: 34,
      link: 'https://www.ebay.co.uk/sch/i.html?_nkw=lego+millennium+falcon'
    },
    {
      brand: 'Trackmaster',
      item: 'Thomas & Friends Trackmaster Percy Engine',
      sold: 85,
      price: '£18',
      available: 19,
      link: 'https://www.ebay.co.uk/sch/i.html?_nkw=trackmaster+percy'
    },
    {
      brand: 'How to Train Your Dragon',
      item: 'Toothless Action Figure with Light FX',
      sold: 60,
      price: '£22',
      available: 11,
      link: 'https://www.ebay.co.uk/sch/i.html?_nkw=toothless+action+figure'
    }
  ];

  const filterInput = document.getElementById('filterInput');
  const toyContainer = document.getElementById('toyContainer');

  const renderToys = (filter = '') => {
    toyContainer.innerHTML = '';
    toys
      .filter(toy =>
        toy.brand.toLowerCase().includes(filter.toLowerCase()) ||
        toy.item.toLowerCase().includes(filter.toLowerCase())
      )
      .forEach(toy => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow p-4 space-y-2';
        card.innerHTML = `
          <h2 class="text-xl font-semibold">${toy.item}</h2>
          <p><strong>Brand:</strong> ${toy.brand}</p>
          <p><strong>Sold (90 days):</strong> ${toy.sold}</p>
          <p><strong>Price:</strong> ${toy.price}</p>
          <p><strong>Available:</strong> ${toy.available}</p>
          <a href="${toy.link}" target="_blank" class="text-blue-600 underline">View on eBay</a>
        `;
        toyContainer.appendChild(card);
      });
  };

  renderToys();
  filterInput.addEventListener('input', () => renderToys(filterInput.value));
});
