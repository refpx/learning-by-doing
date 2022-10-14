import { useMemo, useState } from 'react'
import { categories } from './data/categories.json'
import { products } from './data/products.json'

type Category = {
  id: number
  name: string
  sublevels?: Category[]
}

type MenuProps = {
  categories: Category[]
  onCategoryClick: (category: Category | null) => void
}

type MenuItemProps = {
  category: Category
  onClick: (category: Category | null) => void
}

type Product = {
  quantity: number
  price: string
  available: boolean
  sublevel_id: number
  name: string
  id: string
}

type CartItem = {
  quantity: number
  product: Product
}

type ProductCardProps = {
  product: Product
  item?: CartItem
  onDecremente: (product: Product) => void
  onIncremente: (product: Product) => void
}

function MenuItem({ category, onClick: onClick }: MenuItemProps) {
  const [isCollapsed, setCollapse] = useState(false)

  function handleCollapse(event: React.MouseEvent) {
    event.stopPropagation()

    if (isCollapsed) {
      onClick(null)
    }

    setCollapse(isCollapsed => !isCollapsed)
  }

  return (
    <li key={category.id}>
      <div onClick={() => onClick(category)}>
        <span>{category.name} </span>
        {category.sublevels && (
          <button onClick={handleCollapse}>
            {isCollapsed ? 'cerrar' : 'abrir'}
          </button>
        )}
      </div>
      {category.sublevels && isCollapsed && (
        <Menu categories={category.sublevels} onCategoryClick={onClick} />
      )}
    </li>
  )
}

function Menu({ categories, onCategoryClick: onClick }: MenuProps) {
  return (
    <ol>
      {categories.map(category => (
        <MenuItem onClick={onClick} key={category.id} category={category} />
      ))}
    </ol>
  )
}

const ProductCard = ({
  product,
  item,
  onDecremente,
  onIncremente,
}: ProductCardProps) => {
  return (
    <div style={{ border: '1px solid white' }} key={product.id}>
      {product.name} ({product.price})
      <div>
        <button disabled={!item} onClick={() => onDecremente(product)}>
          -
        </button>
        {item?.quantity || 0}
        <button onClick={() => onIncremente(product)}>+</button>
      </div>
    </div>
  )
}

function App() {
  const [category, setCategory] = useState<Category | null>(null)
  const [cart, setCart] = useState<Map<Product['id'], CartItem>>(
    () => new Map<Product['id'], CartItem>()
  )
  const matches = useMemo(
    () =>
      products.filter(product =>
        category ? product.sublevel_id === category?.id : true
      ),
    [category]
  )

  function handleDecrement(product: Product) {
    const draft = structuredClone(cart)
    const item = draft.get(product.id)

    if (item) {
      if (item.quantity > 1) {
        item.quantity = item.quantity - 1
      } else if (item.quantity === 1) {
        draft.delete(product.id)
      }
    }

    setCart(draft)
  }

  function handleIncrement(product: Product) {
    const draft = structuredClone(cart)
    const item = draft.get(product.id)

    if (item) {
      item.quantity = item.quantity + 1
    } else {
      draft.set(product.id, { quantity: 1, product })
    }

    setCart(draft)
  }

  return (
    <div>
      <Menu
        categories={categories}
        onCategoryClick={category => setCategory(category)}
      />
      {category && <p>Seleccionaste {category.name}</p>}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 12,
        }}>
        {matches.map(product => {
          const item = cart.get(product.id)
          return (
            <ProductCard
              key={product.id}
              product={product}
              item={item}
              onDecremente={handleDecrement}
              onIncremente={handleIncrement}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
