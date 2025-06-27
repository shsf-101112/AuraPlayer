async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/happy_songs/")
    let response = await a.text()
    // console.log(response)

    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    // console.log(as)
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            // console.log(element)
            songs.push(element.href.split("/happy_songs/")[1])
        }
    }
    return songs
}

async function main() {
    let songs = await getSongs();
    let songul = document.querySelector(".songlist ul");

        for (const song of songs) {
            songul.innerHTML+=`<li>${song.replaceAll("%20"," ")}</li>`
        }
    document.querySelectorAll(".play-now").addEventListener("click", async () => {

        var audio = new Audio(songs[1]);
        audio.play();
    });
}


main()