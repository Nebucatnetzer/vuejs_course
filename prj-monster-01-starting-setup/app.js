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
            if (this.monsterHealth < 0) {
                return { width: "0%" };
            }
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: "0%" };
            }
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
        restartGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addToBattleLog("You deal " + attackValue + " damage.");
            this.attackPlayer();
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addToBattleLog(
                "Your special attack deals " + attackValue + " damage."
            );
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
            this.addToBattleLog(
                "You heal yourself with " + healValue + " heal points."
            );
            this.attackPlayer();
        },
        surrender() {
            this.winner = "monster";
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.addToBattleLog(
                "The monster deals " + attackValue + " damage."
            );
            this.playerHealth -= attackValue;
        },
        addToBattleLog(input) {
            this.battleLog.push(input);
        },
    },
});

app.mount("#game");
