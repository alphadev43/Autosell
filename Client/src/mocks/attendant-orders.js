export const mockOrders = [
  {
    orderId: 'AS2024001',
    status: 'pending',
    customerName: 'Sarah Johnson',
    orderTime: '10:45 AM',
    pickupCounter: 3,
    items: [
      { name: 'Fresh Milk 1L', sku: 'FM001', quantity: 2 },
      { name: 'Whole Wheat Bread', sku: 'WWB001', quantity: 1 },
      { name: 'Butter 250g', sku: 'BT001', quantity: 1 }
    ],
    totalItems: 4
  },
  {
    orderId: 'AS2024002',
    status: 'packing',
    customerName: 'Michael Chen',
    orderTime: '10:52 AM',
    pickupCounter: 5,
    items: [
      { name: 'Coca Cola 2L', sku: 'DRINK001', quantity: 3 },
      { name: 'Potato Chips 200g', sku: 'SNACK001', quantity: 2 },
      { name: 'Chocolate Bar', sku: 'CANDY001', quantity: 3 }
    ],
    totalItems: 8
  },
  {
    orderId: 'AS2024003',
    status: 'pending',
    customerName: 'Emily Rodriguez',
    orderTime: '11:03 AM',
    pickupCounter: 2,
    items: [
      { name: 'Tomatoes 500g', sku: 'TM001', quantity: 2 },
      { name: 'Cucumber', sku: 'CG001', quantity: 3 },
      { name: 'Onions', sku: 'ON001', quantity: 1 },
      { name: 'Garlic', sku: 'GL001', quantity: 1 },
      { name: 'Potatoes 1kg', sku: 'PT001', quantity: 2 }
    ],
    totalItems: 9
  },
  {
    orderId: 'AS2024004',
    status: 'completed',
    customerName: 'David Thompson',
    orderTime: '11:15 AM',
    pickupCounter: 7,
    items: [
      { name: 'Coffee Beans 250g', sku: 'CF001', quantity: 2 },
      { name: 'Sugar 1kg', sku: 'SG001', quantity: 1 }
    ],
    totalItems: 3
  },
  {
    orderId: 'AS2024005',
    status: 'packing',
    customerName: 'Lisa Anderson',
    orderTime: '11:28 AM',
    pickupCounter: 4,
    items: [
      { name: 'Chicken Breast 1kg', sku: 'CB001', quantity: 2 },
      { name: 'Ground Beef 500g', sku: 'GB001', quantity: 1 },
      { name: 'Beef Bacon', sku: 'BB001', quantity: 1 }
    ],
    totalItems: 4
  },
  {
    orderId: 'AS2024006',
    status: 'pending',
    customerName: 'James Wilson',
    orderTime: '11:35 AM',
    pickupCounter: 1,
    items: [
      { name: 'Orange Juice 1L', sku: 'OJ001', quantity: 2 },
      { name: 'Yogurt 500g', sku: 'YG001', quantity: 2 }
    ],
    totalItems: 4
  },
  {
    orderId: 'AS2024007',
    status: 'pending',
    customerName: 'Maria Garcia',
    orderTime: '11:42 AM',
    pickupCounter: 6,
    items: [
      { name: 'Rice 5kg', sku: 'RC001', quantity: 1 },
      { name: 'Pasta 500g', sku: 'PA001', quantity: 3 },
      { name: 'Tomato Sauce', sku: 'TS001', quantity: 1 },
      { name: 'Olive Oil', sku: 'OO001', quantity: 1 },
      { name: 'Cheese 200g', sku: 'CH001', quantity: 1 }
    ],
    totalItems: 7
  },
  {
    orderId: 'AS2024008',
    status: 'completed',
    customerName: 'Robert Brown',
    orderTime: '11:50 AM',
    pickupCounter: 8,
    items: [
      { name: 'Bottled Water 6-pack', sku: 'BW001', quantity: 2 }
    ],
    totalItems: 2
  }
];
