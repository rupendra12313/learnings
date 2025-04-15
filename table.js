fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((json) => {
    const data = json.products;
    const table = document.getElementById("dataTable");

    const headers = [
      "id",
      "title",
      "category",
      "price",
      "rating",
      "stock",
      "brand",
      "sku",
      "dimensions.width",
      "dimensions.height",
      "dimensions.depth",
    ];

    let html = "<tr>";
    headers.forEach((key) => {
      html += `<th>${key}</th>`;
    });
    html += "</tr>";

    data.forEach((product) => {
      html += "<tr>";
      headers.forEach((key) => {
        const keys = key.split(".");
        let value = product;
        for (const k of keys) {
          value = value?.[k] ?? "N/A";
        }

        html += `<td>${value}</td>`;
      });
      html += "</tr>";
    });

    table.innerHTML = html;
  })
  .catch((err) => console.error("Error loading JSON:", err));
