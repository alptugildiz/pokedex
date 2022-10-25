<template>
    <div>
        <h1>You can search the pokemon
            <br> you want to know more about
            <br> ٩(◕‿◕｡)۶
        </h1>
        <div class="input-field">

            <input type="text" class="search-input" v-model="search" placeholder="Search..." id="search-input">
        </div>
        <div class="content">
            <div v-for="pokemon in resultQuery" :key="pokemon.id" class="card-poke">
                <div class="front">
                    <div class="poke-img">
                        <img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/` + toUrl(pokemon.id) + '.png'"
                            alt="balbasaur">
                    </div>
                    <div class="poke-name">{{pokemon.name}}</div>
                    <div class="poke-type">type: {{pokemon.types[0].type.name}}</div>
                    <div class="poke-info">
                        <div><img src="./img/hearth.png" alt=""> {{pokemon.stats[0].base_stat}}</div>
                        <div style="position:relative; top:-3px"><img src="./img/attack.png" alt="">
                            {{pokemon.stats[0].base_stat}}</div>
                        <div><img src="./img/armour.png" alt=""> {{pokemon.stats[0].base_stat}}</div>
                    </div>

                    <div class="ground">
                        <img class="marioGround" src="./img/ground.png" alt="">
                        <img class="marioGround" src="./img/ground.png" alt="">
                        <img class="marioGround" src="./img/ground.png" alt="">
                        <img class="marioGround" src="./img/ground.png" alt="">
                        <img class="marioGround" src="./img/ground.png" alt="">
                        <img class="marioGround" src="./img/ground.png" alt="">
                    </div>
                </div>
                <div class="back">
                    <!-- <div class="poke-img">
                        <img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/` + toUrl(pokemon.id) + '.png'"
                            alt="balbasaur">
                    </div> -->
                    <div class="poke-name">{{pokemon.name}}</div>
                    <div class="poke-type">type: {{pokemon.types[0].type.name}}</div>
                    <div class="poke-info">
                        <div><img src="./img/hearth.png" alt=""> {{pokemon.stats[0].base_stat}}</div>
                        <div style="position:relative; top:-3px"><img src="./img/attack.png" alt="">
                            {{pokemon.stats[0].base_stat}}</div>
                        <div><img src="./img/armour.png" alt=""> {{pokemon.stats[0].base_stat}}</div>
                    </div>

                    <div class="ground">
                        <img class="marioGround" src="./img/ground.png" alt="">
                        <img class="marioGround" src="./img/ground.png" alt="">
                        <img class="marioGround" src="./img/ground.png" alt="">
                        <img class="marioGround" src="./img/ground.png" alt="">
                        <img class="marioGround" src="./img/ground.png" alt="">
                        <img class="marioGround" src="./img/ground.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import 'regenerator-runtime/runtime'

export default {
    data: function () {
        return {
            search: '',
            pokemonCount: 151,
            dataOfPokes: [],
            urlOfPokes: ''


        }
    },
    methods: {
        work() {
            for (let i = 1; i <= this.pokemonCount; i++) {
                this.urlOfPokes = 'https://pokeapi.co/api/v2/pokemon/' + i;
                var __url = this.urlOfPokes
                axios.get(__url).then(res => {
                    this.dataOfPokes.push(res.data)
                })
            }
        },
        toUrl(string) {
            return string.toString().padStart(3, '0');
        }
    },
    created() {
        this.work();

    },
    mounted() {

    },
    computed: {
        resultQuery() {
            if (this.search) {
                return this.dataOfPokes.filter((item) => {
                    return this.search.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
            } else {
                return this.dataOfPokes;
            }
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');

h1 {
    text-align: center;
    margin-top: 5%;
    color: rgb(202, 240, 255);
    font-family: "Silkscreen", cursive;
}

.input-field {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
}

.card-poke {
    background-image: linear-gradient(to bottom, #bfeefc00, #bfeefc00, #bfeefc13, #bfeefc77, #bfeefc);
    /* box-shadow: 0px 10px 25px 5px rgba(255,255,255,0.75); */
    margin: 20px 50px;
    border-radius: 25px;
}

.poke-info {
    display: flex;
    justify-content: center;
    /* margin-bottom: 15px; */

}


.poke-info div {
    margin-right: 5px;
}

.poke-info div img {
    position: relative;
    top: 5px;
    width: 24px;
}

.poke-name,
.poke-type {
    text-align: center;
}

.poke-img {
    max-width: 230px;
    display: flex;
    justify-content: center;
}

.poke-img img {
    max-width: 300px;
}


.poke-name,
.poke-type {
    font-size: 20px;
    margin-bottom: 10px;
}

.front .ground {
    display: flex;
    /* position: relative; */

}
.back .ground{
    display: flex;
    position: relative;
    top: 300px;
}
.marioGround {
    position: relative;
    border: none;
    margin: 0px;
    top: 2px;
    padding: 0px;
    width: 40px;
    box-shadow: 0px 5px 15px 0px #D9A23D;

}

.search-input {
    background-color: white;
    padding: 10px 30px;
    border: none;
    font-size: 20px;
    border-radius: 10px 10px 10px 10px;
}

.search-input:focus {
    outline: none;
}

.card-poke:hover>.back {
    display: block;
}

.card-poke:hover>.front {
    display: none;
}

.back {
    display: none;
}
</style>