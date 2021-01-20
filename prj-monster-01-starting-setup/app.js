"use strict";

function attackValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            battleLog: [],
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyles() {
            return { width: this.playerHealth + "%" };
        },
    },
    methods: {
        attackMonster() {
            this.monsterHealth -= attackValue(5, 12);
            this.attackPlayer();
        },
        specialAttackMonster() {},
        healPlayer() {},
        surrender() {},
        attackPlayer() {
            this.playerHealth -= attackValue(8, 15);
        },
    },
});

app.mount("#game");
