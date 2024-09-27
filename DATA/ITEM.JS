const items = [
  {
      id: '001',
      image: 'images/a50myntra6.jpg',
      company: 'Carlton London',
      item_name: 'Rhodium-Plated CZ Floral Studs',
      original_price: 1045,
      current_price: 606,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.5,
          count: 1400,
      },
  },
  {
      id: '002',
      image: 'images/myntra1.webp',
      company: 'CUKOO',
      item_name: 'Women Padded Halter Neck Swimming Dress',
      original_price: 2599,
      current_price: 1507,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.3,
          count: 24,
      },
  },
  {
      id: '003',
      image: 'images/MYNTRA13.webp',
      company: 'NUEVOSDAMAS',
      item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
      original_price: 1599,
      current_price: 495,
      discount_percentage: 69,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.1,
          count: 249,
      },
  },
  {
      id: '004',
      image: 'images/MYNTRA19.webp',
      company: 'ADIDAS',
      item_name: 'Indian Cricket ODI Jersey',
      original_price: 999,
      current_price: 999,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 5.0,
          count: 10,
      },
  },
  {
      id: '005',
      image: 'images/myntra4.webp',
      company: 'Roadster',
      item_name: 'Pure Cotton T-shirt',
      original_price: 1399,
      current_price: 489,
      discount_percentage: 65,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.2,
          count: 3500,
      },
  },
  {
      id: '006',
      image: 'images/myntra1.webp',
      company: 'Nike',
      item_name: 'Men ReactX Running Shoes',
      original_price: 14995,
      current_price: 14995,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 0.0,
          count: 0,
      },
  },
  {
      id: '007',
      image: 'images/myntra2.webp',
      company: 'The Indian Garage Co',
      item_name: 'Men Slim Fit Regular Shorts',
      original_price: 1599,
      current_price: 639,
      discount_percentage: 60,
      rating: {
          stars: 4.2,
          count: 388,
      },
  },
  {
      id: '008',
      image: 'images/myntra 5.webp',
      company: 'Nivea',
      item_name: 'Men Fresh Deodrant 150ml',
      original_price: 285,
      current_price: 142,
      discount_percentage: 50,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.2,
          count: 5200,
      },
    
    },


  { 
     id:'009',
     image: 'images/myntra7.jpg',
    rating : {
        stars:4.5,
        noOfview:1400,
    },
    company:'Carlton London',
    item_name:'Rhodium-plated CZ Floral Studs',

    current_price : '606',
    original_price : '1045',
    discount_percentage : '75',
    return_period:14,
    delivery_date:'10 0ct 2023'

  },

  {
    id: '010',
     image: 'images/myntra8.webp',
    company: 'CUKOO',
    item_name: 'Women Padded Halter Neck Swimming Dress',
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.3,
        noOfview: 24,
    },
},
{
    id: '011',
    image: 'images/myntra9.webp',
    company: 'NUEVOSDAMAS',
    item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
    original_price: 1599,
    current_price: 495,
    discount_percentage: 69,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.1,
        noOfview: 249,
    },
},
{
    id: '012',
    image: 'images/myntra10.webp',
    company: 'ADIDAS',
    item_name: 'Indian Cricket ODI Jersey',
    original_price: 999,
    current_price: 999,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 5.0,
        noOfview: 10,
    },
},
{
    id: '013',
    image: 'images/MYNTRA11.webp',
    company: 'Roadster',
    item_name: 'Pure Cotton T-shirt',
    original_price: 1399,
    current_price: 489,
    discount_percentage: 65,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.2,
        noOfview: 3500,
    },
},
{
    id: '014',
    image: 'images/MYNTRA12.webp',
    company: 'Nike',
    item_name: 'Men ReactX Running Shoes',
    original_price: 14995,
    current_price: 14995,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 0.0,
        noOfview: 0,
    },
},
{
    id: '015',
    image: 'images/MYNTRA13.webp',
    company: 'The Indian Garage Co',
    item_name: 'Men Slim Fit Regular Shorts',
    original_price: 1599,
    current_price: 639,
    discount_percentage: 60,
    rating: {
        stars: 4.2,
        noOfview: 388,
    },
},
{
    id: '016',
    image: 'images/MYNTRA14.webp',
    
    company: 'Nivea',
    item_name: 'Men Fresh Deodrant 150ml',
    original_price: 285,
    current_price: 142,
    discount_percentage: 50,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.2,
        noOfview: 5200,
    },
},
   {  id:'017',
    image: 'images/MYNTRA15.jpg',
    rating : {
        stars:4.5,
        noOfview:1400,
    },
    company:'Carlton London brirtish',
    item_name:'Rhodium-plated CZ Floral Studs',

    current_price : '606',
    original_price : '1045',
    discount_percentage : '45',
    return_period:14,
    delivery_date:'10 0ct 2023'

  },

  { 
    id:'018',
    image: 'images/MYNTRA16.webp',
    rating : {
        stars:4.5,
        noOfview:1400,
    },
    company:'Carlton London',
    item_name:'Rhodium-plated CZ Floral Studs',

    current_price : '222',
    original_price : '456',
    discount_percentage : '45',
    return_period:14,
    delivery_dete:'10 0ct 2023'

  },
  { 
    id:'019',
    image: 'images/MYNTRA17.jpg',
    rating : {
        stars:4.5,
        noOfview:1400,
    },
    company:'amiri',
    item_name:'Rhodium-plated CZ Floral',

    current_price : '606',
    original_price : '1045',
    discount_percentage : '45',
    return_period:14,
    delivery_dete:'10 0ct 2023'

  },
  

  { 
    id:'020',
    image: 'images/MYNTRA18.webp',
    rating : {
        stars:4.0,
        noOfview:12344,
    },
    company:'Carlton London',
    item_name:'Rhodium-plated CZ Floral Studs',

    current_price : '6060',
    original_price : '10450',
    discount_percentage : '45',
    return_period:14,
    delivery_dete:'10 0ct 2023'

  },
   

 
  
  
];