import React from "react";
import PropTypes from "prop-types";

const ProductTable = props => {
  const content = props.data.map((element, i) => {
    return (
      <tr key={i} style={{ borderBottom: "1px solid black" }}>
        <td
          style={{
            borderRight: "1px solid black",
            color: "blue",
            textAlign: "left",
            padding: "10px"
          }}
        >
          {element.name}
        </td>
        <td
          style={{
            borderRight: "1px solid black",
            color: "blue",
            textAlign: "left",
            padding: "10px"
          }}
        >
          {element.categorie}
        </td>
        <td style={{ color: "blue", textAlign: "left", padding: "10px" }}>
          {element.price}
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table
        style={{
          border: "1px solid black",
          width: "50%",
          textAlign: "center",
          margin: "2% 5%",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr style={{ borderBottom: "2px solid black" }}>
            <td style={{ borderRight: "1px solid black", fontWeight: "bold" }}>
              Name
            </td>
            <td style={{ borderRight: "1px solid black", fontWeight: "bold" }}>
              Categorie
            </td>
            <td style={{ fontWeight: "bold" }}>Price</td>
          </tr>
        </thead>
        <tbody style={{ border: "1px solid black" }}>{content}</tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      categorie: PropTypes.string,
      price: PropTypes.number
    })
  )
};

export default ProductTable;
