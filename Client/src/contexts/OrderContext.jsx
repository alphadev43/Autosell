import React, { createContext, useContext, useState } from 'react';
import { mockOrders } from '../mocks/attendant-orders';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(mockOrders);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.orderId === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <OrderContext.Provider value={{ orders, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}
