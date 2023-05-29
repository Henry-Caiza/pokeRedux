export const pokemonsType = () => {
    name: string
    url: string
    id: number
    sprites: { front_default: string }
    types: { type: { name: string } } []
    abilities: { ability: { name: string } } []
    stats: {
        stat: { name: string }
        base_stat: number
    } []
}