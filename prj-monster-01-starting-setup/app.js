"use strict";

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            battleLog: [],
            currentRound: 0,
            winner: null,
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
        playerWon() {
            if (this.winner === "player") {
                return true;
            } else {
                return false;
            }
        },
        monsterWon() {
            if (this.winner === "monster") {
                return true;
            } else {
                return false;
            }
        },
        draw() {
            if (this.winner === "draw") {
                return true;
            } else {
                return false;
            }
        },
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                this.winner = "player";
            }
        },
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            this.monsterHealth -= getRandomValue(5, 12);
            this.attackPlayer();
        },
        specialAttackMonster() {
            this.currentRound++;
            this.monsterHealth -= getRandomValue(10, 25);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
        surrender() {},
        attackPlayer() {
            this.playerHealth -= getRandomValue(8, 15);
        },
    },
});

app.mount("#game");
