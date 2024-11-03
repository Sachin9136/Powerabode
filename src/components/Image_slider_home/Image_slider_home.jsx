import React, { useState } from 'react';
import { Product_img, ShoppingCart, Login_signup } from '../../components/Img/ImportedImage';



const ImageSlider = () => {

  // Handle click to set the active image
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
    <h1>Image sliders</h1>
    <div class="container">
        <div class="main " style="background-image:url('https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.webp?b=1&s=170667a&w=0&k=20&c=wU0Y8tiN3Co4thaVmR6sPEMRTJGyjQw2L-TnYzIcYAw=')">
            <h3>nature image-1</h3>
        </div>
        <div class="main" style="background-image:url('https://media.istockphoto.com/id/583818478/photo/woman-praying-and-free-bird-enjoying-nature-on-sunset-background.webp?b=1&s=170667a&w=0&k=20&c=F5Fdov7Za4xkSMs_vo_tegDF9XvBzPJZzikNZpQBF-k=')">
            <h3>nature image-2</h3>
        </div>
        <div class="main active" style="background-image:url('https://media.istockphoto.com/id/157681198/photo/dandelion-seed.webp?b=1&s=170667a&w=0&k=20&c=o8JhDhTWH6WeB2yXixZVwLy1HQ0tR01FKdQM6EIeX3g=')">
            <h3>nature image-3</h3>
        </div>
        <div class="main" style="background-image:url('https://media.istockphoto.com/id/935746242/photo/mata-atlantica-atlantic-forest-in-brazil.webp?b=1&s=170667a&w=0&k=20&c=h5xvpSv4Nt5rk4esNq6c6XncG4db1b9XOr1SiDpHvMo=')">
            <h3>nature image-4</h3>
        </div>
        <div class="main" style="background-image:url('https://media.istockphoto.com/id/184342766/photo/morning-in-the-field.webp?b=1&s=170667a&w=0&k=20&c=DOTZnGrWumQBfc2xBlTOL2oku96cgSZ8pBsDP8qM1WA=')">
            <h3>nature image-5</h3>
        </div>
        </div>  <h1>Image sliders</h1>
        <div class="container">
        <div class="main " style="background-image:url('https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.webp?b=1&s=170667a&w=0&k=20&c=wU0Y8tiN3Co4thaVmR6sPEMRTJGyjQw2L-TnYzIcYAw=')">
            <h3>nature image-1</h3>
        </div>
        <div class="main" style="background-image:url('https://media.istockphoto.com/id/583818478/photo/woman-praying-and-free-bird-enjoying-nature-on-sunset-background.webp?b=1&s=170667a&w=0&k=20&c=F5Fdov7Za4xkSMs_vo_tegDF9XvBzPJZzikNZpQBF-k=')">
            <h3>nature image-2</h3>
        </div>
        <div class="main active" style="background-image:url('https://media.istockphoto.com/id/157681198/photo/dandelion-seed.webp?b=1&s=170667a&w=0&k=20&c=o8JhDhTWH6WeB2yXixZVwLy1HQ0tR01FKdQM6EIeX3g=')">
            <h3>nature image-3</h3>
        </div>
        <div class="main" style="background-image:url('https://media.istockphoto.com/id/935746242/photo/mata-atlantica-atlantic-forest-in-brazil.webp?b=1&s=170667a&w=0&k=20&c=h5xvpSv4Nt5rk4esNq6c6XncG4db1b9XOr1SiDpHvMo=')">
            <h3>nature image-4</h3>
        </div>
        <div class="main" style="background-image:url('https://media.istockphoto.com/id/184342766/photo/morning-in-the-field.webp?b=1&s=170667a&w=0&k=20&c=DOTZnGrWumQBfc2xBlTOL2oku96cgSZ8pBsDP8qM1WA=')">
            <h3>nature image-5</h3>
        </div>
    </div>
    </>
  );
};

export default ImageSlider;
