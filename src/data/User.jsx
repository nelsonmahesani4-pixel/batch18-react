import react from 'react';
 
const products = {
  Starters: [
    { name: "Bruschetta al Pomodoro", origin: "Italy", emoji: "🍅", price: "$8", cal: 180, image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
    { name: "Gyoza Dumplings", origin: "Japan", emoji: "🥟", price: "$10", cal: 220, image: "https://www.giallozafferano.com/images/273-27391/Japanese-Gyoza-Meat-Dumplings_1200x800.jpg" },
    { name: "Elotes (Street Corn)", origin: "Mexico", emoji: "🌽", price: "$7", cal: 260, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFEkUuG-Jms8tI5eWfjrnA4qWRo4D2q4ZlQ&s" },
    { name: "Saag Paneer Pakora", origin: "India", emoji: "🧀", price: "$9", cal: 310, image: "https://i.ytimg.com/vi/zUVIxCXepBw/maxresdefault.jpg" },
    { name: "Pissaladière", origin: "France", emoji: "🧅", price: "$11", cal: 290, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRNMuqPv8I_nJp1MusLBdMCaqhDwAI2h9mg&s" },
    { name: "Ceviche Clásico", origin: "Peru", emoji: "🍋", price: "$13", cal: 195, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChrPJQWqmdd-IZPaC9e90BTDvAay6P-VyHA&s" },
  ],

  Mains: [
    { name: "Osso Buco alla Milanese", origin: "Italy", emoji: "🥩", price: "$32", cal: 680, image:"https://static01.nyt.com/images/2023/02/26/multimedia/FF-Osso-Bucco-bctk/FF-Osso-Bucco-bctk-jumbo.jpg" },
    { name: "Pad See Ew", origin: "Thailand", emoji: "🍜", price: "$18", cal: 560, image:"https://kwokspots.com/wp-content/uploads/2022/06/pad-see-ew-small.png" },
    { name: "Enchiladas Verdes", origin: "Mexico", emoji: "🫔", price: "$16", cal: 490, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwdH-MjVrSLx5f4HI9svwSj7LXLip4h4HsQ&s" },
    { name: "Tandoori Murgh", origin: "India", emoji: "🍗", price: "$22", cal: 420, image:"https://i.pinimg.com/736x/db/5c/5f/db5c5f190f6351ccd08417c14e00121f.jpg" },
    { name: "Duck à l'Orange", origin: "France", emoji: "🦆", price: "$36", cal: 720, image:"https://www.foodandwine.com/thmb/PltuthJCZaTubsrf4kJh_SOTgGU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Jacques-Pepins-Duck-a-l-Orange-FT-MAG-RECIPE-1225-22978dfe0c084e5982f244a3b82b6d2a.jpg" },
    { name: "Jerk Chicken & Rice", origin: "Jamaica", emoji: "🍚", price: "$20", cal: 640, image:"https://www.eatingwell.com/thmb/LuDGUMoTK8RKk5DOxPZ6Z-uxcJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6535780-e3357b4d18ad4a5e81f0abe5e312c587.jpg" },
  ],

  Desserts: [
    { name: "Tiramisu Classico", origin: "Italy", emoji: "☕", price: "$9", cal: 380 , image:"https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/gponuzqx/2172a9ea-8a6a-4cde-979e-6d17a087137f.jpeg"},
    { name: "Mochi Ice Cream", origin: "Japan", emoji: "🍡", price: "$7", cal: 210, image:"https://upload.wikimedia.org/wikipedia/commons/0/05/Mochi_Ice_Cream.jpg" },
    { name: "Tres Leches Cake", origin: "Mexico", emoji: "🍰", price: "$8", cal: 420, image:"https://www.giallozafferano.it/images/173-17354/Tiramisu_650x433_wm.jpg" },
    { name: "Gulab Jamun", origin: "India", emoji: "🍮", price: "$6", cal: 360 , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbCdlERSgwhxQa97PPL7mYj3ozl0x1mZe_w&s"},
    { name: "Tarte Tatin", origin: "France", emoji: "🍏", price: "$10", cal: 310, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmY0GG1hGVFfOIyicTPM4jTczVff3vSGkY5w&s" },
    { name: "Baklava", origin: "Turkey", emoji: "🍯", price: "$8", cal: 440, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0k4n7GvLKb2KHwV7VGxRNMMLY6p37iaopg&s" },
  ],

  Drinks: [
    { name: "Aperol Spritz", origin: "Italy", emoji: "🍊", price: "$12", cal: 150, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5Vel3RpNFbAGD2d7JiSfD1iEI6yCr6ERxA&s" },
    { name: "Matcha Latte", origin: "Japan", emoji: "🍵", price: "$7", cal: 120, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiaBPNaNY6DOXwIwjTQVRIqictokwFKQuxfA&s" },
    { name: "Horchata de Arroz", origin: "Mexico", emoji: "🥛", price: "$5", cal: 200 , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNevrWwsYAR6Oo6_vm-WJPftcbBsEqrWLH_g&s" },
    { name: "Mango Lassi", origin: "India", emoji: "🥭", price: "$6", cal: 180, image:"https://minimalistbaker.com/wp-content/uploads/2020/05/Mango-Lassi-Smoothie-SQUARE.jpg" },
    { name: "Réalise Citron Pressé", origin: "France", emoji: "🍋", price: "$5", cal: 90, image:"https://c8.alamy.com/compfr/gjwb6f/presse-presse-citron-citrons-gjwb6f.jpg" },
    { name: "Tamarind Agua Fresca", origin: "Mexico", emoji: "🌊", price: "$4", cal: 110, image:"https://i.ytimg.com/vi/TdWq2wRTA9g/maxresdefault.jpg" },
  ],
};
export default products;