<template>
    <dl class="image-preview">
        <dt>
            <p class="panel-tit">消防栓</p>

            <a class="link" href="#">
                <i>&#xe62b;</i>
            </a>
        </dt>

        <dd>
            <div class="preview-item">
                <address>罗星街道体育南路人民路交叉口</address>

                <div class="preview-list">
                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>

                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>

                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>

                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>

                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>

                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>
                </div>
            </div>

            <div class="preview-item">
                <address>罗星街道体育南路人民路交叉口</address>

                <div class="preview-list">
                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>

                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>

                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>

                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>

                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>

                    <figure>
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                    </figure>
                </div>
            </div>
        </dd>
    </dl>
</template>

<script>
    import Zooming from 'zooming';

    export default {
        name: 'Hydrant',
        mounted() {
            // https://desmonding.me/zooming/docs/#/?id=installation
            document.addEventListener('DOMContentLoaded', function () {
                const zooming = new Zooming({
                    // options...
                })

                zooming.listen('.img-zoomable')
            })
        }
    };
</script>

<style lang="scss" scoped>
    .image-preview {
        @include panelItem;

        .preview-item {
            margin-top: .1rem;
            padding-top: .2rem;

            &:first-child {
                margin-top: 0;
            }
            address {
                display: block;
                text-align: center;
            }
            .preview-list {
                @include previewList;
            }
        }
        dd {
            padding: 0;
        }
    }
</style>
