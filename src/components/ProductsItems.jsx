import { Button } from '../components/Button'

export const ProductsItems = ({ thumbnail, title, price, category }) => {
  return (
    <li>
      <img
        loading='lazy'
        width={200}
        height={200}
        src={thumbnail}
        alt={title}
      />
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <Button>Add to cart ✅</Button>
    </li>
  )
}
