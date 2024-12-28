import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatCardComponent } from "./cat-card/cat-card.component";
import { NgForOf } from '@angular/common';


export interface Cat {
   breed: string,
   name: string,
   image: {
      src: string,
      alt: string,
    }
   content: string,
   actions: string []
}
@Component({
  selector: 'app-root',
  imports: [CatCardComponent, NgForOf],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cats: Cat[] = [
    {
      breed: "Abyssinian",
      name: "Marsik",
      image: {
        src: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
        alt: "Photo of an Abyssinian cat"
      },
      content: "The Abyssinian is easy to care for, and a joy to have in your home. They are incredibly loyal, intelligent, and deeply enjoy being part of a family.",
      actions: ["LIKE", "SHARE"]
    },
    {
      breed: "Bengal",
      name: "Simba",
      image: {
        src: "https://cdn2.thecatapi.com/images/MTY3ODE2MA.jpg",
        alt: "Photo of a Bengal cat"
      },
      content: "The Bengal is a sleek and athletic cat, reminiscent of their wild ancestors. They are playful, energetic, and love to climb.",
      actions: ["LIKE", "SHARE"]
    },
    {
      breed: "Persian",
      name: "Shaurma",
      image: {
        src: "https://cdn2.thecatapi.com/images/aiu.jpg",
        alt: "Photo of a Persian cat"
      },
      content: "Persian cats are known for their long, luxurious coats and their sweet, gentle personalities. They love quiet and serene environments.",
      actions: ["LIKE", "SHARE"]
    },
    {
      breed: "Sphynx",
      name: "Miki",
      image: {
        src: "https://cdn2.thecatapi.com/images/115.png",
        alt: "Photo of a Sphynx cat"
      },
      content: "The Sphynx is a hairless breed of cat known for its extroverted behavior. They are highly social and enjoy being the center of attention.",
      actions: ["LIKE", "SHARE"]
    },
    {
      breed: "Maine Coon",
      name: "Pupsi",
      image: {
        src: "https://cdn2.thecatapi.com/images/2g6.jpg",
        alt: "Photo of a Maine Coon cat"
      },
      content: "Maine Coons are large, gentle giants with a friendly and affectionate personality. They are known for their intelligence and dog-like behavior.",
      actions: ["LIKE", "SHARE"]
   
    }, 
    {
      breed: "Abyssinian",
      name: "Lala",
      image: {
        src: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
        alt: "Photo of an Abyssinian cat"
      },
      content: "The Abyssinian is easy to care for, and a joy to have in your home. They are incredibly loyal, intelligent, and deeply enjoy being part of a family.",
      actions: ["LIKE", "SHARE"]
    }
  ]  
  }
  
