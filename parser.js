class Post {
  constructor(rawText) {
    this.rawText = rawText;
  }

  get text() {
    return this.rawText;
  }

  get tags() {
    // split rawText into individual words and store in "words" array
    const words = this.rawText.split(" ");

    // filter "words" array and return all words that start with "#"
    return words.filter(word => word[0] === "#");
  }

}

const parse = () => {
  // clear out tags node  
  document.getElementById("tags").innerHTML = "";

  // create Post object and update tags node with tags
  const post = new Post(document.getElementById("raw-text").value);

  post.tags.forEach(tag => {
    node = document.createElement("li");
    node.innerHTML = tag;
    document.getElementById("tags").appendChild(node);
  });
}