import './css/Cart.css';

export default function () {
    return (
        <div className="mantine-Container-root mantine-15pjuqq">
            <div className="mantine-1tckvsj">
                <div className="mantine-Container-root mantine-15pjuqq" style={{ width: '100%' }}>
                    <h3 className="mantine-Text-root mantine-Title-root mantine-1hrejo7"><button
                        className="mantine-UnstyledButton-root mantine-Button-root mantine-olvkvg" type="button"
                        data-button="true">
                        <div className="mantine-3xbgk5 mantine-Button-inner"><span
                            className="mantine-qo1k2 mantine-Button-label"><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="tabler-icon tabler-icon-chevron-left">
                                <path d="M15 6l-6 6l6 6"></path>
                            </svg></span></div>
                    </button>Корзина</h3>
                </div>
                <div className="mantine-3zgt8p"></div>
            </div>
            <div className="mantine-1kaq23z"><img src="https://apex-tg-site.lavina.tech/static/media/pitsapart.d7047adf9bd1a887cbd4.png"
                height="250" />
                <h1 className="mantine-Text-root mantine-Title-root mantine-1l71p2l">Пока нет товаров</h1>
                <div className="mantine-Text-root mantine-60chd3">Ваша корзина пуста, откройте «Меню» и выберите
                    понравившийся товар.</div><button
                        onClick={() => { window.location.href = '/' }}
                        className="mantine-UnstyledButton-root mantine-Button-root mantine-8exz2f" type="button"
                        data-button="true">
                    <div className="mantine-3xbgk5 mantine-Button-inner"><span
                        className="mantine-qo1k2 mantine-Button-label">Меню</span></div>
                </button>
            </div>
        </div>
    )
}