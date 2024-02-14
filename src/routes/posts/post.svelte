<script>
    export let title;
    export let image;
    export let excerpt;
    export let likes;

    function readMore() {
      // Ваш код для обработки нажатия на кнопку "Читать далее"
    }
  </script>

  <div class="card">
    <img src={image} class="card-img-top" alt="Изображение поста">
    <div class="card-body">
      <h5 class="card-title font-weight-bold">{title}</h5>
      <p class="card-text">{excerpt}</p>
      <button class="btn btn-primary" on:click={readMore}>Читать далее</button>
      <p class="card-text">Количество лайков: {likes}</p>
    </div>
  </div>