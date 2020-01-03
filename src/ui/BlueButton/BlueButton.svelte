<script>
  export let text = 'World'
</script>

<style>
  .button {
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    border-radius: 18px;
    padding: 10px 20px;
    border-style: none;
    cursor: pointer;
    text-transform: uppercase;
  }
  .button:hover {
    background-color: #0069d9;
  }
</style>

<button class="button">Hello {text}</button>
