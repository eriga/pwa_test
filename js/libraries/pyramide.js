const canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

function triangle(x, y, largeur, couleur = "#ffffff") {
    ctx.fillStyle = couleur
    ctx.beginPath()
    ctx.moveTo(x - largeur/2, y + largeur / 2)
    ctx.lineTo(x, y - largeur / 2)
    ctx.lineTo(x + largeur/2, y + largeur / 2)
    ctx.fill()
}