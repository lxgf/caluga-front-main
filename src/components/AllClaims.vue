<template>
<main>
  <div class="heading">
    <p>Мои</p>
    <p>Заявки</p>
  </div>
  <div class="divider"></div>
  <div class="claims">
    <div class="claim">
      <div class="claim__head">
        <img class="claim__photo" alt="Big Russian Cat Шлепа" src="../assets/images/wlepa.png" />
        <div class="claim__timestamp">
          <div class="claim__date">20 октября 21-го</div>
          <div class="claim__time">48:00</div>
        </div>
        <div class="btn btn--accent claim__delete-btn">
          Удалить
        </div>
      </div>
      <div class="claim__body">
        <div class="claim__slider"></div>
        <div class="claim__description">
          С моим большим котом Шлёпой вчера что-то случилось. Он стал в 2 раза больше весом и пытается есть соседские кактусы с балкона. P. S. : Кошка родила котят, в этом Путин виноват.</div>
      </div>
    </div>

    <div class="claim">
      <div class="claim__head">
        <img class="claim__photo" alt="Big Russian Cat Шлепа" src="../assets/images/wlepa.png" />
        <div class="claim__timestamp">
          <div class="claim__date">20 октября 21-го</div>
          <div class="claim__time">48:00</div>
        </div>
        <div class="btn btn--accent claim__delete-btn">
          Удалить
        </div>
      </div>
      <div class="claim__body">
        <div class="claim__slider"></div>
        <div class="claim__description">
          С моим большим котом Шлёпой вчера что-то случилось. Он стал в 2 раза больше весом и пытается есть соседские кактусы с балкона. P. S. : Кошка родила котят, в этом Путин виноват.</div>
      </div>
    </div>

    <div class="claim">
      <div class="claim__head">
        <img class="claim__photo" alt="Big Russian Cat Шлепа" src="../assets/images/wlepa.png" />
        <div class="claim__timestamp">
          <div class="claim__date">20 октября 21-го</div>
          <div class="claim__time">48:00</div>
        </div>
        <div class="btn btn--accent claim__delete-btn">
          Удалить
        </div>
      </div>
      <div class="claim__body">
        <div class="claim__slider"></div>
        <div class="claim__description">
          С моим большим котом Шлёпой вчера что-то случилось. Он стал в 2 раза больше весом и пытается есть соседские кактусы с балкона. P. S. : Кошка родила котят, в этом Путин виноват.</div>
      </div>
    </div>
    
    <div class="claim">
      <div class="claim__head">
        <img class="claim__photo" alt="Big Russian Cat Шлепа" src="../assets/images/wlepa.png" />
        <div class="claim__timestamp">
          <div class="claim__date">20 октября 21-го</div>
          <div class="claim__time">48:00</div>
        </div>
        <div class="btn btn--accent claim__delete-btn">
          Удалить
        </div>
      </div>
      <div class="claim__body">
        <div class="claim__slider"></div>
        <div class="claim__description">
          С моим большим котом Шлёпой вчера что-то случилось. Он стал в 2 раза больше весом и пытается есть соседские кактусы с балкона. P. S. : Кошка родила котят, в этом Путин виноват.</div>
      </div>
    </div>
  </div>
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

.claims {
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-y: scroll;
}

.claims::-webkit-scrollbar {
  display: none;
}

.claim {
  background: #00000080;
  padding: 1.2rem 1.6rem;
  border-radius: 2.4rem;
  margin-bottom: 1.2rem;
}

.claim:last-child {
  background: linear-gradient(180deg, #00000080, #0000);
}

.claim__head {
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
}

.claim__photo {
  width: fit-content;
  height: 3.2rem;
  border-radius: 50%;
  margin-right: 1rem;
}

.claim__timestamp {
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  line-height: 1.6rem;
  width: 100%;
  justify-content: space-between;
}

.claim__date {
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
}

.claim__time {
  font-weight: 600;
  color: rgba(208, 208, 208, 0.8);
}

.claim__delete-btn {
  padding: 0.8rem 1.4rem;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.3rem;
}

.claim__body {
  display: flex;
}

.claim__slider {
  background-image: url('../assets/images/slider.svg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 30%;
  height: 4.2rem;
  width: 3.2rem;
}

.claim__description {
  color: rgba(255, 255, 255, 0.90);
  font-size: 1.3rem;
  font-weight: 600;
  width: fit-content;
}

@media (min-width: 1100px) {
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

  .claims {
    height: 56vh;
  }
}
</style>

<script>
export default {
  name: "AllClaims",
  data() {
    return {
      
    }
  }
}
</script>
