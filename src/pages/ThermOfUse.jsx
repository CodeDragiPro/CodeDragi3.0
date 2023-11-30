import React from "react";

const TermsOfUse = () => {
  return (
    <div className="flex flex-col items-center justify-center md:h-screen h-full text-white p-4">
      <div className="bg-gray-800 p-8 rounded max-w-2xl w-full">
        <h1 className="font-bold text-3xl mb-6">Termes et conditions</h1>

        <p className="mb-6">
          En utilisant nos services, vous acceptez les termes et conditions
          énoncés ci-dessous.
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">1. Prestations</h2>
          <p>Nous fournissons des services de création de sites web. Chaque projet inclut une maquette, fournie à la demande du client.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">2. Propriété intellectuelle</h2>
          <p>Les sites créés restent notre propriété intellectuelle, et nous sommes les créateurs exclusifs des sites. Ils ne peuvent être attribués à d'autres parties sans notre consentement explicite.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">3. Paiement</h2>
          <p>Un acompte de 20% est requis avant le début du projet. Une fois le devis signé, le projet est considéré comme accepté.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">4. Hébergement</h2>
          <p>Nous proposons de gérer le renouvellement de l'hébergement chaque année ou sur une durée plus longue, selon la demande du client.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">5. Contact</h2>
          <p>
            Pour toute question ou préoccupation, veuillez nous contacter à
            l'adresse e-mail suivante :{" "}
            <a href="mailto:codedragipro@gmail.com" className="text-white">
              codedragipro@gmail.com
            </a>{" "}
            ou par téléphone au{" "}
            <a href="tel:+33762266195" className="text-white">
              07.62.26.61.95
            </a>
            .
          </p>
        </section>

        <p className="mb-3">
          Ces termes et conditions sont sujets à changement sans préavis.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
