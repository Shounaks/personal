import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  booksData:Array<Book>;
  animeData:Array<Anime>;

  constructor() { 
    this.booksData = HobbyComponent.getDummyBookData();
    this.animeData = HobbyComponent.getAnimeData();
  }

  ngOnInit(): void {
  }

  static getDummyBookData():Array<Book>{
    return [
      HobbyComponent.generateBookData("Thus Spoke Zarathustra", "Friedrich Nietzsche","Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/books/thus_spoke_zarathustra.jpg"),
      HobbyComponent.generateBookData("The Principal Upanishad", "S. Radhakrishnan ","Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/books/upanishads.jpg"),
      HobbyComponent.generateBookData("Atlas Shrugged", "Ayn Rand","Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/books/atlas_shrugged.webp"),
      HobbyComponent.generateBookData("The Count of Monte Christo", "Alexander Dumas","Dummy Review",[Genre.MYSTERY,Genre.SUSPENSE],["Dummy Quotes"],"assets/books/the_count_of_monte_cristo.jpg"),
      HobbyComponent.generateBookData("The Republic", "Plato","Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/books/republic.jpg")
    ];
  }

  static getAnimeData():Array<Anime>{
    return [

      // HobbyComponent.generateAnimeData("Baccano", "Dummy Review",[Genre.ACTION],["Dummy Quotes"],"assets/anime/baccano.jpg"),
      HobbyComponent.generateAnimeData("Berserk", "Dummy Review",[Genre.ACTION],["Dummy Quotes"],"assets/anime/berserk.webp","https://myanimelist.net/anime/33/Kenpuu_Denki_Berserk"),
      // HobbyComponent.generateAnimeData("Fate/Zero", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/fate_zero.jpg"),
      HobbyComponent.generateAnimeData("Gankutsuou", "Dummy Review",[Genre.MYSTERY,Genre.SUSPENSE],["Dummy Quotes"],"assets/anime/gankutsuou.jpg","https://myanimelist.net/anime/239/Gankutsuou"),
      HobbyComponent.generateAnimeData("Monster", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/monster.jpg","https://myanimelist.net/anime/19/Monster"),
      // HobbyComponent.generateAnimeData("Kekkei Sensen", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/kekkei_sensen.jpg"),
      // HobbyComponent.generateAnimeData("Gurren Lagaan", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/gurren_lagaan.jpg"),
      // HobbyComponent.generateAnimeData("Master Keaton", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/master_keaton.jpg"),
      HobbyComponent.generateAnimeData("Kino's Journey", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/kino_journey.jpg","https://myanimelist.net/anime/486/Kino_no_Tabi__The_Beautiful_World"),
      HobbyComponent.generateAnimeData("Ghost In The Shell", "Dummy Review",[Genre.ACTION],["Dummy Quotes"],"assets/anime/gits.jpg","https://myanimelist.net/anime/43/Koukaku_Kidoutai")
    ];
  }

  static generateBookData(bookName:string,authorName:string,review:string,genre:Array<Genre>,quotes:Array<string>,imageUrl?:string): Book {
    return {
        bookName: bookName,
        authorName: authorName,
        review: review,
        genre: genre,
        imgUrl: this.getImageUrlIfNotNull(imageUrl),
        quotes: quotes
      };
  }

  static generateAnimeData(bookName:string, review:string,genre:Array<Genre>,quotes:Array<string>,imageUrl?:string,myAnimeListUrl?:string): Anime {
    return {
        animeName: bookName,
        review: review,
        genre: genre,
        imgUrl: this.getImageUrlIfNotNull(imageUrl),
        quotes: quotes,
        myAnimeListUrl: myAnimeListUrl == null?"": myAnimeListUrl
      };
  }

  static getImageUrlIfNotNull(imageUrl?:string): string {
    return imageUrl? imageUrl:"";
  }
}

interface Book{
  bookName:string,
  authorName:string,
  review:string,
  imgUrl:string,
  genre:Array<Genre>,
  quotes?:Array<String>
}

enum Genre{
  ACTION = "ACTION",
  SUSPENSE = "SUSPENSE",
  MYSTERY = "MYSTERY",
  PHILOSOPHY = "PHILOSOPHY",
  HISTORY = "HISTORY",
  ROMANCE = "ROMANCE"
}

interface Anime{
  animeName: string,
  review: string,
  imgUrl: string,
  genre: Array<Genre>,
  quotes: Array<string>,
  myAnimeListUrl?: String
}
