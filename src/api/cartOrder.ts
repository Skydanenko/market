import { Product } from '@/types/Product'
import { getDatabase, ref, set, push } from 'firebase/database'

export const buy = async (payload: Product[]): Promise<void> => {
  const db = getDatabase()
  const ordersRef = ref(db, 'orders')
  const orderKey = push(ordersRef).key
  const orderRef = ref(db, 'orders/' + orderKey)

  const orderData = [...payload]

  await set(orderRef, orderData)
}
