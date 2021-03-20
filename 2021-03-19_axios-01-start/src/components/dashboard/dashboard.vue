<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>User Email: {{ email }}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            email: ""
        }
    },
    created(){
        axios.get("https://axios-test-44b62-default-rtdb.europe-west1.firebasedatabase.app/users.json")
            .then(response => {
                console.log(response)
                const data = response.data
                const users = []
                for (let key in data){
                    const user = data[key]
                    user.id = key
                    users.push(user)
                }
                this.email = users[0].email
                console.log(users);
            })
            .catch(error => console.log(error))
    }

}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
