<template>
    <div class="page-background">
        <p class="text-start fw-bold fs-4 fs-md-3 fs-lg-2 p-2 ms-3 ms-md-4 ms-lg-5">
            ขนาด
        </p>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-4 col-md-4  col-lg-2 d-flex justify-content-center align-items-center mb-3">
                    <button class="btn fw-bold" @click="handleClick">
                        <i class="bi bi-phone"></i>
                        แนวตั้ง
                    </button>

                </div>
                <div class="col-4 col-md-4 col-lg-2 d-flex justify-content-center align-items-center mb-3">
                    <button class="btn fw-bold" @click="handleClick">
                        <i class="bi bi-phone-landscape"></i>
                        แนวนอน
                    </button>
                </div>
                <div class="col-4 col-md-4 col-lg-2 d-flex justify-content-center align-items-center mb-3">
                    <button class="btn fw-bold" @click="handleClick">
                        <i class="bi bi-square"></i>
                        จตุรัส
                    </button>
                </div>
            </div>
        </div>

        <p class="text-start fw-bold fs-4 fs-md-3 fs-lg-2 p-2 ms-3 ms-md-4 ms-lg-5">
            โทนสี
        </p>
        <div class="container">
            <div class="row row-cols-5 g-0">
                <div v-for="(button, index) in buttonsColortone" :key="index"
                    class="col-md-2 col-lg-1 d-flex justify-content-center align-items-center"
                    @click="colorToneClick(index)">
                    <button class="btn btn-circle fs-6 position-relative" :class="{ 'btn-active': button.isClicked }"
                        :style="{ backgroundColor: button.color }">
                        <span v-if="button.isClicked"
                            class="position-absolute top-50 start-50 translate-middle checkmark-circle">
                            <i class="fa fa-check text-white" aria-hidden="true"></i>
                        </span>
                        {{ button.label }}
                    </button>
                </div>
            </div>
        </div>
        <p class="text-start fw-bold fs-4 fs-md-3 fs-lg-2 p-2 ms-3 ms-md-4 ms-lg-5">
            สไตล์ภาพ
        </p>
        <div class="container">
            <div class="row g-1">
                <div v-for="(button, index) in filteredButtons" :key="index"
                    class="col-lg-2 col-4 d-flex justify-content-center align-items-center py-2">
                    <button class="btn-img" :class="[button.class, { 'btn-active': button.isClicked }]"
                        :aria-label="button.ariaLabel" @click="imageStyleClick(index)">
                        <span v-if="button.isClicked"
                            class="position-absolute top-50 start-50 translate-middle checkmark-circle">
                            <i class="fa fa-check text-white" aria-hidden="true"></i>
                        </span>
                        <span :class="{ 'btn-text-active': button.isClicked, 'btn-text': !button.isClicked }">{{
                            button.label }}</span>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <button class="btn-imageMore fw-bold text-center py-2 border-0 btn-no-change"
                        @click="toggleShowMore">
                        {{ showMore ? 'ดูน้อยลง' : 'เพิ่มเติม' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeButton = ref(null);
const isClicked = ref(false);
const showMore = ref(false);

const buttonsColortone = ref([
    { label: 'มงคล', color: '#a59f8c', isClicked: false },
    { label: 'มงคล', color: '#006032', isClicked: false },
    { label: 'มงคล', color: '#9357a5', isClicked: false },
    { label: 'มงคล', color: '#000000', isClicked: false },
    { label: 'มงคล', color: '#b44b00', isClicked: false },
    { label: '', color: '#8c693c', isClicked: false },
    { label: '', color: '#6eaa14', isClicked: false },
    { label: '', color: '#aa6991', isClicked: false },
    { label: '', color: '#373737', isClicked: false },
    { label: '', color: '#afa02d', isClicked: false },
    { label: '', color: '#0a2d5a', isClicked: false },
    { label: '', color: '#287db4', isClicked: false },
    { label: '', color: '#aa965f', isClicked: false },
    { label: '', color: '#7e7e82', isClicked: false },
    { label: '', color: '#b4b4b4', isClicked: false },
    { label: 'กาลกิณี', color: '#820505', isClicked: false }
]);
const buttonsImagestyle = ref([
    { label: 'Vintage', class: 'vintage', ariaLabel: 'Vintage Image', isClicked: false },
    { label: 'Modern', class: 'modern', ariaLabel: 'Modern Image', isClicked: false },
    { label: 'Romantic', class: 'romantic', ariaLabel: 'Romantic Image', isClicked: false },
    { label: 'Medieval', class: 'medieval', ariaLabel: 'Medieval Image', isClicked: false },
    { label: 'Renaissance', class: 'renaissance', ariaLabel: 'Renaissance Image', isClicked: false },
    { label: 'Greek', class: 'greek', ariaLabel: 'Greek Image', isClicked: false },
    { label: '3D', class: 'image3d', ariaLabel: '3D Image', isClicked: false },
    { label: 'Anime', class: 'anime', ariaLabel: 'Anime Image', isClicked: false },
    { label: 'Pixel Art', class: 'pixel_art', ariaLabel: 'Pixel Art Image', isClicked: false },
    { label: 'Fantasy', class: 'fantasy', ariaLabel: 'Fantasy Image', isClicked: false },
    { label: 'Sci-fi', class: 'sci-fi', ariaLabel: 'Sci-fi Image', isClicked: false },
    { label: 'Street', class: 'street', ariaLabel: 'Street Image', isClicked: false },
    { label: 'Abstract', class: 'abstract', ariaLabel: 'Abstract Image', isClicked: false },
    { label: 'Vintage Retro', class: 'vintage_Retro', ariaLabel: 'Vintage_Retro Image', isClicked: false },
    { label: 'Gothic', class: 'gothic', ariaLabel: 'Gothic Image', isClicked: false },
    { label: 'Surreal', class: 'surreal', ariaLabel: 'Surreal Image', isClicked: false },
    { label: 'Minimalist', class: 'minimalist', ariaLabel: 'Minimalist Image', isClicked: false },
    { label: 'Pop Art', class: 'pop_Art', ariaLabel: 'Pop_Art Image', isClicked: false },
    { label: 'Steampunk', class: 'steampunk', ariaLabel: 'Steampunk Image', isClicked: false },
    { label: 'Cyberpunk', class: 'cyberpunk', ariaLabel: 'Cyberpunk Image', isClicked: false },
    { label: 'Art Deco', class: 'art_Deco', ariaLabel: 'art_Deco Image', isClicked: false },
    { label: 'Expressionist', class: 'expressionist', ariaLabel: 'Expressionist Image', isClicked: false }
]);

const handleClick = (event) => {
    if (activeButton.value) {
        activeButton.value.classList.remove('active');
    }
    event.target.classList.add('active');
    activeButton.value = event.target;
};
const colorToneClick = (index) => {
    buttonsColortone.value[index].isClicked = !buttonsColortone.value[index].isClicked;
};
const imageStyleClick = (index) => {
    const currentButton = buttonsImagestyle.value[index];

    if (currentButton.isClicked) {

        currentButton.isClicked = false;
    } else {

        buttonsImagestyle.value.forEach((button) => {
            button.isClicked = false;
        });
        currentButton.isClicked = true;
    }
};
const toggleShowMore = () => {
    showMore.value = !showMore.value;
};

const filteredButtons = computed(() => {
    return showMore.value ? buttonsImagestyle.value : buttonsImagestyle.value.slice(0, 12);
});
</script>

<style scoped>
h1 {
    text-align: left;
    width: 100%;
    margin-left: 20px;
}

.page-background {
    background-color: #c2bdbd;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.button-container {
    display: flex;
    gap: 2vw;
}

button {

    background-color: #f7f7f7;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, border 0.3s ease;
}

button.active {
    background-color: #90b5dd;
    border: 2px solid #196eca;
    color: #196eca;
}

.btn-no-change:active,
.btn-no-change:focus {
    background-color: transparent;
    border: none;
    color: inherit;
}

.btn-circle {
    width: 15vw;
    height: 15vw;
    max-width: 60px;
    max-height: 60px;
    margin: 1vw;
    border-radius: 50%;
    color: white;
    border: none;
    font-size: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.btn-active {
    border: 2px solid #196eca;
}

.btn-circle {
    position: relative;
    border-radius: 50%;

}

.btn-circle .fa-check {
    font-size: 20px;
}

.checkmark-circle {
    width: 20px;
    height: 20px;
    background-color: #196eca;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.checkmark-circle .fa-check {
    font-size: 10px;
}

.btn-circle:hover {
    opacity: 0.8;
}

.img-fluid {
    width: 160px;
    height: 130px;
    border-radius: 15px;
}

.btn-img {
    position: relative;
    background-size: cover;
    background-position: center;
    width: 120px;
    height: 130px;
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
}

.btn-text {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: #f7f7f7c0;
    color: #000000;
    padding: 2px 10px;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
    width: 90%;
    box-sizing: border-box;
}

.btn-text-active {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #196eca;
    color: #fff;
    padding: 2px 10px;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
    width: 90%;
    box-sizing: border-box;
}

.btn-imageMore {
    background-color: #c2bdbd;
    border: 0;
    box-shadow: none;
}

.btn-img.vintage {
    background-image: url('/public/images/vintage.jpg');
}

.btn-img.modern {
    background-image: url('/public/images/Modern.jpg');
}

.btn-img.romantic {
    background-image: url('/public/images/Romantic.jpg');
}

.btn-img.medieval {
    background-image: url('/public/images/Medieval.jpg');
}

.btn-img.renaissance {
    background-image: url('/public/images/Renaissance.jpg');
}

.btn-img.renaissance {
    background-image: url('/public/images/Renaissance.jpg');
}

.btn-img.greek {
    background-image: url('/public/images/Greek.jpg');
}

.btn-img.image3d {
    background-image: url('/public/images/3D.jpg');
}

.btn-img.anime {
    background-image: url('/public/images/anime.png');
}

.btn-img.pixel_art {
    background-image: url('/public/images/Pixel_art.jpg');
}

.btn-img.fantasy {
    background-image: url('/public/images/Fantasy.jpg');
}

.btn-img.sci-fi {
    background-image: url('/public/images/Sci-fi.jpg');
}

.btn-img.street {
    background-image: url('/public/images/Street.jpg');
}

.btn-img.abstract {
    background-image: url('/public/images/Abstract.jpg');
}

.btn-img.vintage_Retro {
    background-image: url('/public/images/Vintage_Retro.jpg');
}

.btn-img.gothic {
    background-image: url('/public/images/Gothic.jpg');
}

.btn-img.surreal {
    background-image: url('/public/images/Surreal.jpg');
}

.btn-img.minimalist {
    background-image: url('/public/images/Minimalist.jpg');
}

.btn-img.pop_Art {
    background-image: url('/public/images/Pop_Art.png');
}

.btn-img.steampunk {
    background-image: url('/public/images/Steampunk.jpg');
}

.btn-img.cyberpunk {
    background-image: url('/public/images/Cyberpunk.jpg');
}

.btn-img.art_Deco {
    background-image: url('/public/images/Art_Deco.jpg');
}

.btn-img.expressionist {
    background-image: url('/public/images/Expressionist.jpg');
}
</style>