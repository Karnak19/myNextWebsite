const AsideSection = ({ section, title, items }) => {
  return (
    <section className={`${section}-section py-3`}>
      <h3 className="text-uppercase resume-section-heading mb-4">{title}</h3>
      {items.map(({ itemTitle, list }) => {
        return (
          <div className="item">
            <h4 className="item-title">{itemTitle}</h4>
            <ul className={`list-unstyled resume-${section}-list`}>
              {list.map((li, i) => {
                return (
                  <li className="mb-2" key={i}>
                    {li}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default AsideSection;
