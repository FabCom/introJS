function script_01(){
  console.log("Bonjour monde !")
}

function script_01b(){
  let name = prompt("Quel est ton prénom ?");
  console.log("Bonjour " + name + " !");
}

function script_02(){
  let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
  let result = 1;
  for(let i = number; i > 0; i--){
    result = result * i;
  }
  console.log("La factorielle de " + number + " est " + result);
}

function script_03(){
  let stages = prompt("Combien d'étage pour ta pyramide ?");
  for(let i = 1; i <= stages; i++){
    console.log(" ".repeat(stages-i) + "#".repeat(i)) 
  }
}

function script_04(){
  const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  console.log("Entrepreneurs nés dans les années 70 : ")
  console.log(entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980));
  result = [];
  //array des prénoms et des noms
  for(let i = 0; i < entrepreneurs.length; i++){
    result.push(entrepreneurs[i].first + " " + entrepreneurs[i].last);
  }
  console.log("Prénom et nom des entrepreneurs : ");
  console.log(result);
  result = [];
  //Add age des entrepreneurs
  current_year = (new Date()).getFullYear();
  for(let i = 0; i < entrepreneurs.length; i++){
    entrepreneurs[i].age = current_year - entrepreneurs[i].year 
    result.push(entrepreneurs[i]);
  }
  console.log("Entrepreneurs avec leur âge actuel (if they're not dead of course) : ");
  console.log(result);
  result = [];
  //Entrepreneurs par ordre alphabétique sur le nom
  console.log("Entrepreneurs triés par ordre alphabétique sur le nom")
  console.log(entrepreneurs.sort((a,b) => a.last>b.last));
}


function script_05(){
  const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  // Rented == 0
  if (books.filter(book => book.rented < 1).length == 0){
    console.log("> Tous les livres ont été empruntés au moins une fois.")
  }else{
    console.log("Au moins un livre n'a jamais été emprunté.")
  }
  console.log("> Livre le plus emprunté : " + books.sort((a,b) => a.rented > b.rented)[books.length-1].title);
  console.log("> Livre le moins emprunté : " + books.sort((a,b) => a.rented > b.rented)[0].title);
  console.log("> livre avec l'id=873495 : " + books.filter(book => book.id == 873495)[0].title)
  console.log("> Suppression du livre avec l'id=133712 : ")
  books_newlist = books.filter(book => book.id != 133712);
  console.log(books_newlist);
  console.log("> Liste ordonnée par ordre alphabétique :")
  console.log(books_newlist.sort((a,b) => a.title > b.title))

}

function script_06(){
  function codonToAcideamine(codon){
    switch(codon) {
      case 'UCU':
      case 'UCC':
      case 'UCG':
      case 'AGU':
      case 'AGC':
        return 'Sérine';
        break;
      case 'CCU':
      case 'CCC':
      case 'CCA':
      case 'CCG':
        return 'Proline';
        break;
      case 'UUA':
      case 'UUG':
        return 'Leucine';
        break;
      case 'UUU':
      case 'UUC':
        return 'Phénylalanine';
        break;
      case 'CGU':
      case 'CGC':
      case 'CGA':
      case 'CGG':
      case 'AGA':
      case 'AGG':
        return 'Arginine';
        break;
      case 'UAU':
      case 'UAC':
        return 'Tyrosine';
        break;
      default:
        return 'unknow'
    }
  }
  let arn = prompt("Quel est l'ARN à traduire ?");
  while(arn.length != 12){
    arn = prompt("Quel est l'ARN à traduire ?");
  }
  arn1 = codonToAcideamine(arn.substr(0,3));
  arn2 = codonToAcideamine(arn.substr(3,3));
  arn3 = codonToAcideamine(arn.substr(6,3));
  arn4 = codonToAcideamine(arn.substr(9,3));
  if(arn1 || arn2 || arn3 || arn4 == "error"){
    console.log("Il y a une erreur dans l'ARN demandé (" + arn + ')')
    console.log("ARN traduit en protéines : " + arn1+'-'+arn2+'-'+arn3+'-'+arn4)
  }else{
    console.log("ARN traduit en protéines : " + arn1+'-'+arn2+'-'+arn3+'-'+arn4)
  }
}

function script_07(){
  function isAllUpperCase(sentence){
    for(let i = 0; i < sentence.length;i++){
      if (sentence.substr(i,1) != sentence.substr(i,1).toUpperCase()){
        return false;
        break;
      }
    }
  }

  sentence = prompt("Je t'écoute ?");
  if (sentence.substr(sentence.legth-1,1) == "?"){
    alert("Ouai ouai");
  } else if (isAllUpperCase(sentence) != false){
    alert("Du calme !")
  } else if (sentence.includes('Fortnite') == true ){
    alert("Une tiot' partie ?")
  } else if (sentence === ""){
    alert("Tu es en pls ?");
  } else {
    alert("Balek");
  }
}