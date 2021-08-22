import { useSelector } from 'react-redux'
import { StyledMainContentItems } from "./styles";
import MainContentItem from './MainContentItem';
import { store, actionLoadAPIURL } from '../../reducers'
import { loadAPIURLService } from '../../services';

function MainContentItems() {
    const data = useSelector((state) => ({ title: state.title, items: state.items, prev: state.prev, next: state.next }));
    let itemsRedered = data.items && data.items.length > 0 ?
        data.items?.map((item, index) => {
            return <MainContentItem key={index} item={item} index={index} />;
        })
    :
        <div className="empty">Nenhum registro localizado.</div>;

    const buttonPrev = data.prev ? <button className="api-nav" onClick={() => { onClick(data.prev, actionLoadAPIURL, loadAPIURLService); }}>Voltar</button> : null;
    const buttonNext = data.next ? <button className="api-nav" onClick={() => { onClick(data.next, actionLoadAPIURL, loadAPIURLService); }}>Avançar</button> : null;

    const onClick = (url, actionDispatch, actionService) => {
        let items = actionService(url);
        store.dispatch(actionDispatch({ items }));
    }

    return (
        <StyledMainContentItems>
            <h1>{data.title}</h1>
            {itemsRedered}
            <hr />
            <div className="pagination">
                {buttonPrev}
                &nbsp;
                {buttonNext}
            </div>
        </StyledMainContentItems>
    );
}

export default MainContentItems;
