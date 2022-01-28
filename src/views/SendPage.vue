<template>
<main>
  <div class="heading">
    <p>Отправить</p>
    <p>Заявку</p>
  </div>
  <div class="divider"></div>
  <form @submit.prevent="sendData" class="form">
    <div class="form__wrap">
      <input type="text" class="form__name" :value="updateName" placeholder="Имя" required>
      <input type="text" class="form__surname" :value="updateSurname" placeholder="Фамилия" required>
    </div>
    <ul ref="scrollRow" @wheel="e => horizontalScroll()" class="form__categories">
      <li>
        <input v-model="category" type="radio" value="Дороги" checked name="categories" id="cat_roads">
        <label for="cat_roads">Дороги</label>
      </li>
      <li>
        <input v-model="category" type="radio" value="Экология" name="categories" id="cat_ecology">
        <label for="cat_ecology">"Экология"</label>
      </li>
      <li>
        <input v-model="category" type="radio" value="Социальное" name="categories" id="cat_social">
        <label for="cat_social">"Социальное"</label>
      </li>
      <li>
        <input v-model="category" type="radio" value="Другое" name="categories" id="cat_other">
        <label for="cat_other">"Другое"</label>
      </li>
    </ul>
    <textarea autofocus v-model="description" class="form__textarea" placeholder="Описание" required></textarea>
<!--    <input type="file" class="form__file">-->
    <button type="submit" class="form__btn btn btn--accent">Отправить</button>
  </form>
</main>

</template>

<style scoped>
.heading {
  display: flex;
  flex-wrap: wrap;
  font-size: 5rem;
  line-height: 6rem;
}

.heading>p:first-child {
  font-weight: 800;
  opacity: 85%;
  width: 100%;
}

.heading>p:last-child {
  font-weight: 900;
  width: 100%;
}

.form__wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

li {
  display: inline-block;
  list-style-type: none;
}

.form__categories {
  overflow-x: scroll;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: .5rem;
  margin-bottom: 1.2rem;
}

::-webkit-scrollbar {
  height: .3rem;
  width: .5rem;
  background-color: #0B0C1650;
  border-radius: .3rem;
}

::-webkit-scrollbar-thumb {
  background-color: #673ab7;
  border-radius: .3rem;
}

input[name='categories'] {
  display: none;
}

label {
  display: inline-block;
  user-select: none;
  background: #988C8C62;
  color: #D7D7D785;
  font-size: 1.6rem;
  font-weight: 900;
  line-height: 2rem;
  padding: .7rem 1.6rem;
  border-radius: 2rem;
  border: 2px solid transparent;
  transition: all 0.1s 0s ease-in-out;
  cursor: pointer;
  margin-right: 1.2rem;
}

input[type="radio"]:checked+label {
  border-color: #ffffff;
  background: #988C8C84;
  color: white;
}

.form__textarea {
  background: #988C8C62;
  color: #FFFFFF;
  border: 2px solid transparent;
  padding: .8rem 1.6rem;
  border-radius: 2.4rem;
  font-weight: 900;
  font-size: 2rem;
  outline: none;
  transition: all 0.1s 0s ease-in-out;
  width: 100%;
  height: 7rem;
  margin-bottom: .8rem;
  resize: none;
}

.form__textarea:focus {
  background: #988C8C84;
  border-color: #ffffff;
}

.form__textarea::-webkit-scrollbar {
  display: none;
}

.form__file {
  font-weight: 500;
  color: #D7D7D790;
  margin-bottom: 1.2rem;
}

.form__file::-webkit-file-upload-button {
  background: #988C8C62;
  color: #D7D7D770;
  border: 2px solid transparent;
  padding: .6rem 1.6rem;
  border-radius: 2.4rem;
  font-weight: 900;
  font-size: 1.6rem;
  transition: all 0.1s 0s ease-in-out;
  cursor: pointer;
}

.form__file::-webkit-file-upload-button:hover {
  border-color: #ffffff;
  background: #988C8C84;
  color: white;
}

.form__btn {
  float: right;
}

@media (min-width: 1100px) {
  .form__wrap {
    flex-wrap: nowrap;
  }

  .form__name {
    margin-right: 10vw;
  }

  .form__categories {
    overflow-x: hidden;
    padding-bottom: 0;
  }

  .form__textarea {
    height: 20vh;
  }

  .heading {
    flex-wrap: nowrap;
  }

  .heading>p:first-child {
    width: fit-content;
    margin-right: 1.2rem;
  }

  .heading>p:last-child {
    font-weight: 900;
    width: fit-content;
  }
}

@media (max-width: 375px) {
  .heading {
    font-size: 4.25rem;
    line-height: 5.25rem;
  }

  .form__file {
    font-size: 0;
  }
}
</style>

<script>
export default {
  name: "SendPage",
  methods: {
    horizontalScroll(e) {
      e = e || window.event
      let delta = e.deltaY
      let scrollRow = this.$refs.scrollRow
      let preSLeft = scrollRow.scrollLeft
      scrollRow.scrollLeft = preSLeft + delta
    },
    resetForm() {
      this.description = ''
      this.category = 'Дороги'
    },
    sendData() {
      const timestamp = this.$date.toDate()
      const date = timestamp.getDate()+'.'+(timestamp.getMonth()+1)+'.'+timestamp.getFullYear()
      const time = timestamp.getHours()+':'+timestamp.getMinutes()
      if (this.$store.state.isLogin === true) {
        this.$db.collection(this.$auth.currentUser.uid).add({
          category: this.category,
          description: this.description,
          date: date,
          time: time
        })
        this.resetForm()
      } else {
        this.$store.dispatch('showLogin', true)
      }
    }
  },
  data() {
    return {
      description: '',
      category: 'Дороги'
    }
  },
  computed: {
    updateName() {
      return this.$store.state.name;
    },
    updateSurname() {
      return this.$store.state.surname;
    }
  },
}
</script>
