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
      HobbyComponent.generateBookData("Thus Spoke Zarathustra", "Friedrich Nietzsche","Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"https://images-na.ssl-images-amazon.com/images/I/91BVK99+oZL.jpg"),
      HobbyComponent.generateBookData("The Principal Upanishad", "S. Radhakrishnan ","Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"https://images-na.ssl-images-amazon.com/images/I/51vIbgJx4pL._SX313_BO1,204,203,200_.jpg"),
      HobbyComponent.generateBookData("Atlas Shrugged", "Ayn Rand","Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"https://images-na.ssl-images-amazon.com/images/I/513S8itK2EL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"),
      HobbyComponent.generateBookData("The Count of Monte Christo", "Alexander Dumas","Dummy Review",[Genre.MYSTERY,Genre.SUSPENSE],["Dummy Quotes"],"https://d1b14unh5d6w7g.cloudfront.net/0553213504.01.S001.LXXXXXXX.jpg?Expires=1658129686&Signature=Ppn-E~bWJp2P1nK2fTy52xdRz4u~g5gVXK~p~vH4CsTDXQY65v-HyoeHcLhgdSkefDLNs7nb2OjW-tUXengnUQlLQ3eJ2qquT2zVKKe5Zd1T28nBKV~IIBH8uUx40gSFlGFZNA07oI5QAczFGzG~z7-zZNJJvMVt5GW100HA3d4_&Key-Pair-Id=APKAIUO27P366FGALUMQ"),
      HobbyComponent.generateBookData("The Republic", "Plato","Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"https://d1b14unh5d6w7g.cloudfront.net/0140455116.01.S001.LXXXXXXX.jpg?Expires=1658129584&Signature=DS0v~9dwD0ImNCgizGKeqhMYZe6P0JU11v--wF3XsmZ91GtvzCz3p0iDm0vaY4J-ENwL-VRcr8vS36OUznbVQPclbBOWBb1NoP0911GxcAAFyg7RTSXcjiGIFtU5OKLdhkVB7G1toDCqsZjjB9cdA6NElV~pzDf1TKnHmKSVCks_&Key-Pair-Id=APKAIUO27P366FGALUMQ")
    ];
  }

  static getAnimeData():Array<Anime>{
    return [

      // HobbyComponent.generateAnimeData("Baccano", "Dummy Review",[Genre.ACTION],["Dummy Quotes"],"assets/anime/baccano.jpg"),
      HobbyComponent.generateAnimeData("Berserk", "Dummy Review",[Genre.ACTION],["Dummy Quotes"],"assets/anime/berserk.webp"),
      // HobbyComponent.generateAnimeData("Fate/Zero", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/fate_zero.jpg"),
      HobbyComponent.generateAnimeData("Gankutsuou", "Dummy Review",[Genre.MYSTERY,Genre.SUSPENSE],["Dummy Quotes"],"assets/anime/gankutsuou.jpg"),
      HobbyComponent.generateAnimeData("Monster", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/monster.jpg"),
      // HobbyComponent.generateAnimeData("Kekkei Sensen", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/kekkei_sensen.jpg"),
      // HobbyComponent.generateAnimeData("Gurren Lagaan", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/gurren_lagaan.jpg"),
      // HobbyComponent.generateAnimeData("Master Keaton", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/master_keaton.jpg"),
      HobbyComponent.generateAnimeData("Kino's Journey", "Dummy Review",[Genre.PHILOSOPHY],["Dummy Quotes"],"assets/anime/kino_journey.jpg"),
      HobbyComponent.generateAnimeData("Ghost In The Shell", "Dummy Review",[Genre.ACTION],["Dummy Quotes"],"assets/anime/gits.jpg")
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

  static generateAnimeData(bookName:string, review:string,genre:Array<Genre>,quotes:Array<string>,imageUrl?:string): Anime {
    return {
        animeName: bookName,
        review: review,
        genre: genre,
        imgUrl: this.getImageUrlIfNotNull(imageUrl),
        quotes: quotes
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
  quotes: Array<string>
}
