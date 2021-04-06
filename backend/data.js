import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Petitsfruits',
        logo: '/images/logo.png',
        description: 'best seller',
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Alien aime skate',
      category: 'peintures',
      image: '/images/alien_skate.jpg',
      price: 70,
      description: 'tshirts',
      countInStock: 10,
    },
    {
      name: 'Alien dans le métro',
      category: 'peintures',
      image: '/images/alien_metro.jpg',
      price: 70,
      description: 'tshirts',
      countInStock: 10,
    },
    {
      name: 'Leave Me Alone',
      category: 'peintures',
      image: '/images/leaveMeAlone.png',
      price: 100,
      description: 'toile aquarelle 9x12"',
      countInStock: 1,
    },
    {
      name: 'Vin Vilain',
      category: 'peintures',
      image: '/images/vinVilain.png',
      price: 50,
      description: 'toile aquarelle 9x12"',
      countInStock: 2,
    },
    {
      name: 'Alien au Stade',
      category: 'peintures',
      image: '/images/alien_stade.jpg',
      price: 70,
      description: 'tshirts',
      countInStock: 10,
    }, {
      name: 'Alien aime bagel',
      category: 'illustrations',
      image: '/images/alien_bagel.jpg',
      price: 70,
      description: 'illustrations',
      countInStock: 1,
    },
  ],
};
export default data;

