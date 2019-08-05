<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
                <form @submit.prevent="editBook">
                    <md-card>

                        <md-card-header data-background-color="purple">
                            <h4 class="title">Редактирование книги</h4>
                        </md-card-header>

                        <md-card-content>
                            <div class="md-layout">
                                <div class="md-layout-item md-size-100">
                                    <md-field>
                                        <label>Название книги </label>
                                        <md-input v-model="name_val" type="text"></md-input>
                                    </md-field>
                                    <div class="form-group">
                                        <p>Файл книги</p>
                                        <p>Оставьте пустым, если не хотите менять</p>
                                        <input id="book" @change="onAttachmentSaveBook" type="file" name="book"
                                               style="opacity: 1; position: static;">
                                    </div>
                                    <md-field>
                                        <label>Автор </label>
                                        <md-input v-model="author_val" type="text"></md-input>
                                    </md-field>
                                    <md-field>
                                        <label>Год</label>
                                        <md-input v-model="year_val" type="text"></md-input>
                                    </md-field>
                                    <md-field style="flex-wrap: wrap;">
                                        <labal for="language">Язык</labal>
                                        <select name="language" style="width: 100%;" class="form-control" id="language"
                                                v-model="language_val" required="">
                                            <option value="">Выберите язык</option>
                                            <option value="kz">Казахский</option>
                                            <option value="ru">Русский</option>
                                            <option value="en">Английский</option>
                                        </select>
                                    </md-field>
                                    <md-field style="flex-wrap: wrap;">
                                        <labal for="subjects">Дисциплины (Зажмите Ctrl, чтобы выбрать несколько)</labal>
                                        <select id="subjects" v-model="subjects" multiple class="form-control"
                                                style="width: 100%; height: 200px;">

                                            <option value="" style="color: #6e79ff" disabled="">
                                                ГУМАНИТАРНО-ТЕХНИЧЕСКИЕ
                                            </option>
                                            <option value="2">––&gt; Агробиология, орман және жер ресурстары,
                                                гидротехника, мелиорация, биоресурстар
                                            </option>
                                            <option value="3">––&gt; Анатомия, физиология, гигиена, эпидемиология
                                            </option>
                                            <option value="4">––&gt; Архитектура, дизайн, құрылыс, стандарттау,
                                                метрология және сертификаттау / Архитектура, дизайн, строительство,
                                                стандартизация, метрология и сертификация
                                            </option>
                                            <option value="7">––&gt; Әскери кафедра / Военная кафедра</option>
                                            <option value="5">––&gt; Биология, химия, география, экология</option>
                                            <option value="6">––&gt; Дене шынықтыру және спорт / Физическая культура и
                                                спорт
                                            </option>
                                            <option value="8">––&gt; Металлургия, машина жасау, көлік және көлік
                                                техникасы / Металлургия, машиностроение, техника и транспортная техника
                                            </option>
                                            <option value="9">––&gt; Педагогика, психология</option>
                                            <option value="10">––&gt; Тарих, философия, құқық, әлеуметтану, саясаттану /
                                                История, философия, право, социология, политология
                                            </option>
                                            <option value="11">––&gt; Физика, математика, информатика, инновациялық
                                                технология
                                            </option>
                                            <option value="12">––&gt; Филология</option>
                                            <option value="13">––&gt; Экономика</option>
                                            <option value="14">––&gt; Энергетика, автоматика, телекоммуникация, еңбек
                                                қорғау
                                            </option>
                                            <option value="" style="color: #6e79ff" disabled="">МЕДИЦИНСКИЕ</option>
                                            <option value="15">––&gt; Акушерия және гинекология, урология</option>
                                            <option value="16">––&gt; Амбулаторлы-емханалық терапия, жалпы тәжірибелік
                                                дәрігер / Амбулаторно-поликлиническая терапия, врач общей практики
                                            </option>
                                            <option value="17">––&gt; Анатомия, физиология</option>
                                            <option value="18">––&gt; Анестезиология және реаниматология, кардиология,
                                                пульмонология
                                            </option>
                                            <option value="27">––&gt; Әскери медицина / Военная медицина</option>
                                            <option value="19">––&gt; Балалар аурулары және жұқпалы аурулар, педиатрия /
                                                Детские болезни, инфекционные болезни, педиатрия
                                            </option>
                                            <option value="20">––&gt; Биоэтика</option>
                                            <option value="21">––&gt; Геронтология және гериатрия</option>
                                            <option value="22">––&gt; Гигиена, эпидемиология, экология</option>
                                            <option value="24">––&gt; Дәлелді медицина / Доказательная медицина</option>
                                            <option value="25">––&gt; Дәрігер мамандығына кіріспе / Введение в профессию
                                                врача
                                            </option>
                                            <option value="23">––&gt; Дене тәрбиесі және спорт медицинасы / Физическая
                                                культура, медицина спорта
                                            </option>
                                            <option value="26">––&gt; Еңбек гигиенасы / Гигиена труда</option>
                                            <option value="28">––&gt; Жедел медициналық жәрдем / Скорая медицинская
                                                помощь
                                            </option>
                                            <option value="29">––&gt; Зертханалық диагностика / Лабораторная
                                                диагностика
                                            </option>
                                            <option value="30">––&gt; Ішкі аурулар, жалпы тәжірибелік дәрігер, жедел
                                                жәрдем / Внутренние болезни, врач общей практики, скорая помощь
                                            </option>
                                            <option value="31">––&gt; Ішкі аурулар, мейірбике ісі / Внутренние болезни,
                                                сестринское дело
                                            </option>
                                            <option value="32">––&gt; Кәсіптік аурулар / Профессиональные болезни
                                            </option>
                                            <option value="33">––&gt; Клиникалық фармакология / Клиническая
                                                фармакология
                                            </option>
                                            <option value="34">––&gt; Коммуникативтік дағдылар және психология негіздері
                                                / Коммуникативные навыки и основы психологии
                                            </option>
                                            <option value="35">––&gt; Қазақ тілі, орыс тілі, шет тілдері</option>
                                            <option value="36">––&gt; Қазақстан тарихы, тарих және саясаттану / История
                                                Казахстана, история и политология
                                            </option>
                                            <option value="37">––&gt; Қоғамдық денсаулық сақтау, Фармация, химия / ОЗ,
                                                фармация, химия
                                            </option>
                                            <option value="38">––&gt; Медициналық биофизика, биостатистика / Медицинская
                                                биофизика, биостатистика
                                            </option>
                                            <option value="39">––&gt; Медициналық құқық, сот медицинасы / Медицинское
                                                право, судебная медицина
                                            </option>
                                            <option value="40">––&gt; Молекулалық биология және генетика, микробиология,
                                                иммунология / Молекулярная биология и генетика, генетика, микробиология,
                                                иммунология
                                            </option>
                                            <option value="41">––&gt; Онкология</option>
                                            <option value="42">––&gt; Психиатрия, наркология және психотерапия,
                                                неврология
                                            </option>
                                            <option value="43">––&gt; Стоматология</option>
                                            <option value="44">––&gt; Тағам гигиенасы / Гигиена питания</option>
                                            <option value="45">––&gt; Фармакология</option>
                                            <option value="46">––&gt; Философия және әлеуметтану / Философия и
                                                социология
                                            </option>
                                            <option value="47">––&gt; Хирургия</option>
                                            <option value="" style="color: #6e79ff" disabled="">ДРУГИЕ</option>
                                            <option value="48">––&gt; Ғылыми мақалалар / Научные статьи</option>
                                        </select>

                                    </md-field>

                                    <div class="form-group">
                                        <p>Постер книги</p>
                                        <p>Оставьте пустым, если не хотите менять</p>
                                        <input id="poster" @change="onAttachmentSavePoster" type="file" name="poster"
                                               style="opacity: 1; position: static;">
                                    </div>
                                    <br><br>


                                </div>
                                <div class="md-layout-item md-size-100">
                                    <md-button type="submit" class="md-raised md-primary md-block">Обновить книгу
                                    </md-button>
                                </div>
                            </div>
                        </md-card-content>

                    </md-card>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                author: '',
                year:'',
                book:'',
                poster:'',
                language:'',
                subject:'',
            };
        },
        computed: {
            name_val: {
                get () {
                    if(this.getBook) {
                        this.name = this.getBook.name;
                        return this.getBook.name;
                    }
                },
                set (value) {
                    this.name = value;
                }
            },
            author_val: {
                get () {
                    if(this.getBook) {
                        this.author = this.getBook.author;
                        return this.getBook.author;
                    }
                },
                set (value) {
                    this.author = value;
                }
            },
            year_val: {
                get () {
                    if(this.getBook) {
                        this.year = this.getBook.year;
                        return this.getBook.year;
                    }
                },
                set (value) {
                    this.year = value;
                }
            },
            language_val: {
                get () {
                    if(this.getBook) {
                        this.language = this.getBook.language;
                        return this.getBook.language;
                    }
                },
                set (value) {
                    this.language = value;
                }
            },
            getBook() {
                return this.$store.getters['book/Book'];
            }
        },

        methods: {
            editBook() {
                this.$store.dispatch('book/update', {
                    id: this.$route.params.id,
                    name: this.name,
                    author: this.author,
                    book: this.book,
                    poster: this.poster,
                    year: this.year,
                    language: this.language,
                    "subjects[]": this.subjects,
                }).then(response => {
                    this.$router.push('/admin/books');
                }).catch(error => {

                });
            },
            onAttachmentSaveBook(e) {
                if(e.target.files[0]) {
                    this.book = e.target.files[0];
                } else {
                    this.book = null
                }

            },
            onAttachmentSavePoster(e) {
                if(e.target.files[0]) {
                    this.poster = e.target.files[0];
                } else {
                    this.poster = null
                }
            },
            errorNotify() {
                this.$notify({
                    message: "Ошибка сохранения!",
                    icon: "add_alert",
                    horizontalAlign: 'center',
                    verticalAlign: 'top',
                    type: 'danger'
                });
            },

        },
        beforeMount() {
            this.$store.dispatch('book/getBook', {
                id: this.$route.params.id,
            })
        }

    };
</script>
