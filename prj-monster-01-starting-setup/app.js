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
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyles() {
            return { width: this.playerHealth + "%" };
        },
        specialAttackAllowed() {
            return this.currentRound % 3 !== 0;
        },
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            this.monsterHealth -= attackValue(5, 12);
            this.attackPlayer();
        },
        specialAttackMonster() {
            this.currentRound++;
            this.monsterHealth -= attackValue(10, 25);
            this.attackPlayer();
        },
        healPlayer() {},
        surrender() {},
        attackPlayer() {
            this.playerHealth -= attackValue(8, 15);
        },
    },
});

app.mount("#game");
