fetch('data.json')
  .then(res => res.json())
  .then(json => {
    const data = json.products; // Get products array
    const table = document.getElementById("dataTable");

    // Create table header
    const headers = [
      "id", "title", "category", "price", "rating", "stock", "brand", "sku",
      "dimensions.width", "dimensions.height", "dimensions.depth"
      
    ];

    const headerRow = document.createElement("tr");
    headers.forEach(key => {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create data rows
    data.forEach(product => {
      const row = document.createElement("tr");

      headers.forEach(key => {
        const td = document.createElement("td");

        // Handle nested keys like "dimensions.width"
        const keys = key.split(".");
        let value = product;
        for (const k of keys) {
          value = value?.[k] ?? "N/A";
        }

        // For reviews, show only the first one
        if (key.startsWith("review.") && Array.isArray(product.reviews)) {
          value = product.reviews[0]?.[keys[1]] ?? "N/A";
        }

        td.textContent = value;
        row.appendChild(td);
      });

      table.appendChild(row);
    });
  })
  .catch(err => console.error("Error loading JSON:", err));
