<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-content data-background-color="purple">
                        <md-button v-on:click="show = !show" class="md-raised md-success pull-right"
                                   style="margin-right: 20px;">
                            Расширенный поиск
                        </md-button>
                        <h4 class="title">Книги</h4>
                        <p class="category">1 стр | показано 24 из 1007</p>
                    </md-card-content>
                </md-card>
            </div>

            <div v-if="show" class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <form>
                    <md-card>
                        <md-card-content>
                            <h4 class="title">Расширенный поиск</h4>
                            <md-field>
                                <label>Ключевые слова</label>
                                <md-input required v-model="name" type="text"></md-input>
                            </md-field>


                            <div class="col-md-4 col-lg-3">
                                <div class="form-group is-empty">
                                    <label class="control-label">Автор</label>
                                    <div class="md-layout-item md-size-50 mx-auto md-xsmall-size-100">
                                        <div class="dropup">
                                            <button type="button"
                                                    class="md-button md-button md-success md-round md-block dropdown-toggle md-theme-default"
                                                    data-toggle="dropdown">
                                                <div class="md-ripple">
                                                    <div class="md-button-content">
                                                        Dropup
                                                    </div>
                                                </div>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li><a href="#">Mike John responded to your email</a></li>
                                                <li><a href="#">You have 5 new tasks</a></li>
                                                <li><a href="#">You're now friend with Andrew</a></li>
                                                <li><a href="#">Another Notification</a></li>
                                                <li><a href="#">Another One</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <span class="material-input"></span></div>
                            </div>

                            <div class="col-md-4 col-lg-3">
                                <div class="form-group is-empty">
                                    <label class="control-label">Дисциплина</label>

                                    <div class="dropdown bootstrap-select bs3"><select class="selectpicker"
                                                                                       name="subject"
                                                                                       data-style="btn-primary"
                                                                                       data-live-search="true"
                                                                                       data-size="7"
                                                                                       data-virtual-scroll="true"
                                                                                       tabindex="-98">
                                        <option value="">Выберите дисциплину</option>
                                        <optgroup>
                                            <option style="margin-left: -15px; font-weight: 700"
                                                    value="hum-phis">ГУМАНИТАРНО-ТЕХНИЧЕСКИЕ
                                            </option>
                                            <option value="2">Агробиология, орман және жер ресурстары,
                                                гидротехника, мелиорация, биоресурстар
                                            </option>
                                            <option value="3">Анатомия, физиология, гигиена, эпидемиология
                                            </option>
                                            <option value="4">Архитектура, дизайн, құрылыс, стандарттау,
                                                метрология және сертификаттау / Архитектура, дизайн,
                                                строительство, стандартизация, метрология и сертификация
                                            </option>
                                            <option value="7">Әскери кафедра / Военная кафедра</option>
                                            <option value="5">Биология, химия, география, экология</option>
                                            <option value="6">Дене шынықтыру және спорт / Физическая культура и
                                                спорт
                                            </option>
                                            <option value="8">Металлургия, машина жасау, көлік және көлік
                                                техникасы / Металлургия, машиностроение, техника и транспортная
                                                техника
                                            </option>
                                            <option value="9">Педагогика, психология</option>
                                            <option value="10">Тарих, философия, құқық, әлеуметтану, саясаттану
                                                / История, философия, право, социология, политология
                                            </option>
                                            <option value="11">Физика, математика, информатика, инновациялық
                                                технология
                                            </option>
                                            <option value="12">Филология</option>
                                            <option value="13">Экономика</option>
                                            <option value="14">Энергетика, автоматика, телекоммуникация, еңбек
                                                қорғау
                                            </option>
                                        </optgroup>
                                        <optgroup>
                                            <option style="margin-left: -15px; font-weight: 700"
                                                    value="medical">МЕДИЦИНСКИЕ
                                            </option>

                                            <option value="15">Акушерия және гинекология, урология</option>
                                            <option value="16">Амбулаторлы-емханалық терапия, жалпы тәжірибелік
                                                дәрігер / Амбулаторно-поликлиническая терапия, врач общей
                                                практики
                                            </option>
                                            <option value="17">Анатомия, физиология</option>
                                            <option value="18">Анестезиология және реаниматология, кардиология,
                                                пульмонология
                                            </option>
                                            <option value="27">Әскери медицина / Военная медицина</option>
                                            <option value="19">Балалар аурулары және жұқпалы аурулар, педиатрия
                                                / Детские болезни, инфекционные болезни, педиатрия
                                            </option>
                                            <option value="20">Биоэтика</option>
                                            <option value="21">Геронтология және гериатрия</option>
                                            <option value="22">Гигиена, эпидемиология, экология</option>
                                            <option value="24">Дәлелді медицина / Доказательная медицина
                                            </option>
                                            <option value="25">Дәрігер мамандығына кіріспе / Введение в
                                                профессию врача
                                            </option>
                                            <option value="23">Дене тәрбиесі және спорт медицинасы / Физическая
                                                культура, медицина спорта
                                            </option>
                                            <option value="26">Еңбек гигиенасы / Гигиена труда</option>
                                            <option value="28">Жедел медициналық жәрдем / Скорая медицинская
                                                помощь
                                            </option>
                                            <option value="29">Зертханалық диагностика / Лабораторная
                                                диагностика
                                            </option>
                                            <option value="30">Ішкі аурулар, жалпы тәжірибелік дәрігер, жедел
                                                жәрдем / Внутренние болезни, врач общей практики, скорая помощь
                                            </option>
                                            <option value="31">Ішкі аурулар, мейірбике ісі / Внутренние болезни,
                                                сестринское дело
                                            </option>
                                            <option value="32">Кәсіптік аурулар / Профессиональные болезни
                                            </option>
                                            <option value="33">Клиникалық фармакология / Клиническая
                                                фармакология
                                            </option>
                                            <option value="34">Коммуникативтік дағдылар және психология
                                                негіздері / Коммуникативные навыки и основы психологии
                                            </option>
                                            <option value="35">Қазақ тілі, орыс тілі, шет тілдері</option>
                                            <option value="36">Қазақстан тарихы, тарих және саясаттану / История
                                                Казахстана, история и политология
                                            </option>
                                            <option value="37">Қоғамдық денсаулық сақтау, Фармация, химия / ОЗ,
                                                фармация, химия
                                            </option>
                                            <option value="38">Медициналық биофизика, биостатистика /
                                                Медицинская биофизика, биостатистика
                                            </option>
                                            <option value="39">Медициналық құқық, сот медицинасы / Медицинское
                                                право, судебная медицина
                                            </option>
                                            <option value="40">Молекулалық биология және генетика,
                                                микробиология, иммунология / Молекулярная биология и генетика,
                                                генетика, микробиология, иммунология
                                            </option>
                                            <option value="41">Онкология</option>
                                            <option value="42">Психиатрия, наркология және психотерапия,
                                                неврология
                                            </option>
                                            <option value="43">Стоматология</option>
                                            <option value="44">Тағам гигиенасы / Гигиена питания</option>
                                            <option value="45">Фармакология</option>
                                            <option value="46">Философия және әлеуметтану / Философия и
                                                социология
                                            </option>
                                            <option value="47">Хирургия</option>
                                        </optgroup>
                                        <optgroup>
                                            <option style="margin-left: -15px; font-weight: 700" value="other">
                                                ДРУГИЕ
                                            </option>
                                            <option value="48">Ғылыми мақалалар / Научные статьи</option>
                                        </optgroup>
                                    </select>
                                        <md-button type="button"
                                                   class="md-raised md-primary"
                                                   data-toggle="dropdown" role="button"
                                                   title="Выберите дисциплину">
                                            <div class="filter-option">
                                                <div class="filter-option-inner">
                                                    <div class="filter-option-inner-inner">Выберите дисциплину
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="bs-caret"><span class="caret"></span></span>
                                        </md-button>
                                        <div class="dropdown-menu open" role="combobox">
                                            <div class="bs-searchbox"><input type="text" class="form-control"
                                                                             autocomplete="off" role="textbox"
                                                                             aria-label="Search"></div>
                                            <div class="inner open" role="listbox" aria-expanded="false"
                                                 tabindex="-1">
                                                <ul class="dropdown-menu inner "></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="material-input"></span></div>
                            </div>

                            <div class="col-md-4 col-lg-3">
                                <div class="form-group">
                                    <label class="control-label">Язык</label>
                                    <div class="dropdown bootstrap-select bs3"><select name="language"
                                                                                       class="selectpicker"
                                                                                       data-style="btn-primary"
                                                                                       tabindex="-98">
                                        <option>Все</option>
                                        <option value="kz">Казахский</option>
                                        <option value="ru">Русский</option>
                                        <option value="en">Английский</option>
                                    </select>
                                        <md-button type="button" class="md-raised md-primary"
                                                   data-toggle="dropdown" role="button" title="Все">
                                            <div class="filter-option">
                                                <div class="filter-option-inner">
                                                    <div class="filter-option-inner-inner">Все</div>
                                                </div>
                                            </div>
                                            <span class="bs-caret"><span class="caret"></span></span>
                                        </md-button>
                                        <div class="dropdown-menu open" role="combobox">
                                            <div class="inner open" role="listbox" aria-expanded="false"
                                                 tabindex="-1">
                                                <ul class="dropdown-menu inner "></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <md-button class="md-raised md-info ">Поиск</md-button>
                            </div>
                        </md-card-content>
                    </md-card>
                </form>
            </div>

            <div v-for="(item, index) in books" class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                <div class="md-card md-card-stats md-theme-default">
                    <div class="md-card-content">
                        <div class="poster-container ">
                            <img :src="item.poster ? 'http://aybek-test/' + item.poster : 'https://www.film.ru/images/empty/260x400.png'"
                                 alt="Постер книги"
                                 class="poster">
                        </div>
                        <br>
                        <div v-if="isAdmin" class="card-actions  ">
                            <a target="_blank" href="/download/2125" style="margin: 0; padding: 6px 12px;" type="button"
                               class="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title=""
                               data-original-title="Download">
                                <i class="material-icons text-gray">file_download</i></a>
                            <a href="/book/2125/edit" style="margin: 0; padding: 6px 12px;" type="button"
                               class="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title=""
                               data-original-title="Edit">
                                <i class="material-icons text-success">edit</i>
                                <div class="ripple-container"></div>
                            </a>
                            <a href="/book/2125/delete" style="margin: 0; padding: 6px 12px;" type="button"
                               class="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title=""
                               data-original-title="Remove">
                                <i class="material-icons text-danger">close</i>
                                <div class="ripple-container"></div>
                            </a>
                        </div>
                        <br>
                        <div class="books-description text-center">
                            <h6 class="category book-name" :title="item.name">{{item.name}}</h6>
                            <p class="card-description books-author" :title="item.author + item.year ">
                                {{item.author}}.{{item.year}}</p>
                        </div>
                        <md-button target="_blank" href="/reader/web/2125" class="md-round md-success">Открыть книгу
                        </md-button>
                        <md-button v-if="!item.bookmarked" v-on:click="bookmarkAdd(item.id, index)" class="md-round md-info">В закладки</md-button>
                        <md-button v-if="item.bookmarked" v-on:click="bookmarkRemove(item)" class="md-round">Убрать из
                            закладок
                        </md-button>
                    </div>
                </div>
            </div>


        </div>
        <div>
            <ul class="pagination">

                <li class="disabled"><span>&laquo;</span></li>


                <li class="active"><span>1</span></li>
                <li><a href="https://aknurpress.kz/books?page=2">2</a></li>
                <li><a href="https://aknurpress.kz/books?page=3">3</a></li>
                <li><a href="https://aknurpress.kz/books?page=4">4</a></li>
                <li><a href="https://aknurpress.kz/books?page=5">5</a></li>
                <li><a href="https://aknurpress.kz/books?page=6">6</a></li>
                <li><a href="https://aknurpress.kz/books?page=7">7</a></li>
                <li><a href="https://aknurpress.kz/books?page=8">8</a></li>

                <li class="disabled"><span>...</span></li>


                <li><a href="https://aknurpress.kz/books?page=46">46</a></li>
                <li><a href="https://aknurpress.kz/books?page=47">47</a></li>


                <li><a href="https://aknurpress.kz/books?page=2" rel="next">&raquo;</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import env from '../../config/env.js';

    export default {
        data() {
            return {
                show: false,
                books: null,
                bookmarks: null,
            }
        },
        computed: {
            isAdmin() {
                return this.$store.getters['auth/isAdmin'];
            },
        },
        beforeMount() {
            this.$store.dispatch('book/getPage', {
                page: this.$route.params.page,
            }).then(response => {
                this.books = this.$store.getters["book/PageItems"];
                if(this.bookmarks.length !== 0) {
                    this.setBookmarks();
                }
            });

            this.$store.dispatch("bookmarks/getList").then(response => {
                this.bookmarks = this.$store.getters["bookmarks/Bookmarks"];
                if(this.books.length !== 0) {
                    this.setBookmarks();
                }
            });
        },
        methods: {
            setBookmarks() {
                const bookmarks_array = this.bookmarks;
                this.books.forEach(function (item) {
                    item.bookmarked = bookmarks_array.find(bookmark => item.id === bookmark) ? 1 : 0;
                });
            },
            bookmarkAdd(book, index) {
                this.books[index].bookmarked = 1;
            }
        }
    };
</script>

<style scoped>
    .poster {
        max-width: 142px;
        width: 100%;
        margin: 10px auto 20px;
        max-height: 215px;
        overflow: hidden;
    }

    .md-card-stats .md-card-content {
        text-align: center;
        padding-top: 20px;
    }

    .pagination {
        display: inline-block;
        padding-left: 0;
        margin: 20px 0;
        border-radius: 4px
    }

    .pagination > li {
        display: inline
    }

    .pagination > li > a, .pagination > li > span {
        position: relative;
        float: left;
        padding: 6px 12px;
        margin-left: -1px;
        line-height: 1.42857143;
        color: #337ab7;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #ddd
    }

    .pagination > li:first-child > a, .pagination > li:first-child > span {
        margin-left: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px
    }

    .pagination > li:last-child > a, .pagination > li:last-child > span {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px
    }

    .pagination > li > a:focus, .pagination > li > a:hover, .pagination > li > span:focus, .pagination > li > span:hover {
        z-index: 2;
        color: #23527c;
        background-color: #eee;
        border-color: #ddd
    }

    .pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {
        z-index: 3;
        color: #fff;
        cursor: default;
        background-color: #337ab7;
        border-color: #337ab7
    }

    .pagination > .disabled > a, .pagination > .disabled > a:focus, .pagination > .disabled > a:hover, .pagination > .disabled > span, .pagination > .disabled > span:focus, .pagination > .disabled > span:hover {
        color: #777;
        cursor: not-allowed;
        background-color: #fff;
        border-color: #ddd
    }

    .pagination-lg > li > a, .pagination-lg > li > span {
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.3333333
    }

    .pagination-lg > li:first-child > a, .pagination-lg > li:first-child > span {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px
    }

    .pagination-lg > li:last-child > a, .pagination-lg > li:last-child > span {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px
    }

    .pagination-sm > li > a, .pagination-sm > li > span {
        padding: 5px 10px;
        font-size: 12px;
        line-height: 1.5
    }

    .pagination-sm > li:first-child > a, .pagination-sm > li:first-child > span {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px
    }

    .pagination-sm > li:last-child > a, .pagination-sm > li:last-child > span {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px
    }

    .pagination > li > a,
    .pagination > li > span {
        border: 0;
        border-radius: 30px !important;
        transition: all .3s;
        padding: 0px 11px;
        margin: 0 3px;
        min-width: 30px;
        height: 30px;
        line-height: 30px;
        color: #999999;
        font-weight: 400;
        font-size: 12px;
        text-transform: uppercase;
        background: transparent;
    }

    .pagination > li > a:hover,
    .pagination > li > a:focus,
    .pagination > li > span:hover,
    .pagination > li > span:focus {
        color: #999999;
    }

    .pagination > .active > a,
    .pagination > .active > span {
        color: #999999;
        text-align: center;
    }

    .pagination > .active > a,
    .pagination > .active > a:focus,
    .pagination > .active > a:hover,
    .pagination > .active > span,
    .pagination > .active > span:focus,
    .pagination > .active > span:hover {
        background-color: #9c27b0;
        border-color: #9c27b0;
        color: #FFFFFF;
        box-shadow: 0 4px 5px 0 rgba(156, 39, 176, 0.14), 0 1px 10px 0 rgba(156, 39, 176, 0.12), 0 2px 4px -1px rgba(156, 39, 176, 0.2);
    }

    .pagination.pagination-info > .active > a,
    .pagination.pagination-info > .active > a:focus,
    .pagination.pagination-info > .active > a:hover,
    .pagination.pagination-info > .active > span,
    .pagination.pagination-info > .active > span:focus,
    .pagination.pagination-info > .active > span:hover {
        background-color: #00bcd4;
        border-color: #00bcd4;
        box-shadow: 0 4px 5px 0 rgba(0, 188, 212, 0.14), 0 1px 10px 0 rgba(0, 188, 212, 0.12), 0 2px 4px -1px rgba(0, 188, 212, 0.2);
    }

    .pagination.pagination-success > .active > a,
    .pagination.pagination-success > .active > a:focus,
    .pagination.pagination-success > .active > a:hover,
    .pagination.pagination-success > .active > span,
    .pagination.pagination-success > .active > span:focus,
    .pagination.pagination-success > .active > span:hover {
        background-color: #4caf50;
        border-color: #4caf50;
        box-shadow: 0 4px 5px 0 rgba(76, 175, 80, 0.14), 0 1px 10px 0 rgba(76, 175, 80, 0.12), 0 2px 4px -1px rgba(76, 175, 80, 0.2);
    }

    .pagination.pagination-warning > .active > a,
    .pagination.pagination-warning > .active > a:focus,
    .pagination.pagination-warning > .active > a:hover,
    .pagination.pagination-warning > .active > span,
    .pagination.pagination-warning > .active > span:focus,
    .pagination.pagination-warning > .active > span:hover {
        background-color: #ff9800;
        border-color: #ff9800;
        box-shadow: 0 4px 5px 0 rgba(255, 152, 0, 0.14), 0 1px 10px 0 rgba(255, 152, 0, 0.12), 0 2px 4px -1px rgba(255, 152, 0, 0.2);
    }

    .pagination.pagination-danger > .active > a,
    .pagination.pagination-danger > .active > a:focus,
    .pagination.pagination-danger > .active > a:hover,
    .pagination.pagination-danger > .active > span,
    .pagination.pagination-danger > .active > span:focus,
    .pagination.pagination-danger > .active > span:hover {
        background-color: #f44336;
        border-color: #f44336;
        box-shadow: 0 4px 5px 0 rgba(244, 67, 54, 0.14), 0 1px 10px 0 rgba(244, 67, 54, 0.12), 0 2px 4px -1px rgba(244, 67, 54, 0.2);
    }
</style>
