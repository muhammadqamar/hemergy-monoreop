const Contribution = () => {
  return (
    <div className="contribution-card">
      <div className="contribution-rate">
        <h3 className="rate-price">
          150<sup>€</sup>
        </h3>

        <h5 className="rate-lemet">/ m</h5>
      </div>
      <p className="contribution-heading">Contribution</p>

      <div className="contribution-slide">
      <input type="range" />
      </div>
    </div>
  );
};

export default Contribution;
