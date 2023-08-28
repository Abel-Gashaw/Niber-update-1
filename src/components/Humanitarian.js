// Humanitarian.js
import "./humanitarian.css";

import hum1 from "../Images/hum1.png";
import med1 from "../Images/med1.png";

export default function Humanitarian() {
  return (
    <div className="humanitarian">
      {/* Header Image */}
      <header className="page-header">
        <h1>Humanitarian Programs</h1>
      </header>

      {/* Food Assistance Section */}
      <section>
        <div className="img-container">
          <img src={med1} alt="" />
        </div>
        <div className="detailcontainer">
          <h2>Food Assistance</h2>
          <p>
            Inspiring News from Mekelle!! Accept our Warm Greetings in advance!!
            Today August on the 16th of August 2023 Niber Foundation has held a
            vibrant & warm Handing over of Medicinal Support worth of 6 Million.
            At the event which took place at Axum Hotel Mekelle, Delegates and
            leaders from the Interim Administration of Tigrai Bureau of Health,
            The Tigrai Patriots' Commission, and Medical center for the wounded
            veterans, and invited guests availed to the reception of the aid.
            They related bodies remarked the Foundation's blessed hands of
            charity to those facing medicinal lack, and have expressed immense
            appreciation for the initiative Niber Foundation took which shall be
            strengthened and followed as an examplary deed. They have all
            expressed their hope Niber's continuing support in the over all
            recovery,reconstruction, and rehabilitation of the Post-War Tigrai.
            During the event, regional mainstream medias availed for News
            Coverage of the event that will be broadcasted for the wider public.
            I on behalf of the Mekelle Niber Foundation team, would like to
            dearly extend for the contributing partners, friends, and families
            of Niber's Endevours. With out your contribution and dedicated
            efforts, this would have not happened. God bless you all. We
            definitely believe not only Niber's Vision and Mission of realizing
            a recovered and restored Tigrai, but also a more civilized, stable
            and economically strong Tigrai more than ever before. Have a good
            time!!
          </p>
        </div>
      </section>

      {/* Medical Assistance Section */}
      <section className="medsec-co">
        <div className="med1img-co">
          <img src={med1} alt="" className="med1img" />
        </div>
        <div className="meddesc-co">
          <h2>Medical Assistance</h2>
          <p>
            Inspiring News from Mekelle!! Accept our Warm Greetings in advance!!
            Today August on the 16th of August 2023 Niber Foundation has held a
            vibrant & warm Handing over of Medicinal Support worth of 6 Million.
            At the event which took place at Axum Hotel Mekelle, Delegates and
            leaders from the Interim Administration of Tigrai Bureau of Health,
            The Tigrai Patriots' Commission, and Medical center for the wounded
            veterans, and invited guests availed to the reception of the aid.
            They related bodies remarked the Foundation's blessed hands of
            charity to those facing medicinal lack, and have expressed immense
            appreciation for the initiative Niber Foundation took which shall be
            strengthened and followed as an examplary deed. They have all
            expressed their hope Niber's continuing support in the over all
            recovery,reconstruction, and rehabilitation of the Post-War Tigrai.
            During the event, regional mainstream medias availed for News
            Coverage of the event that will be broadcasted for the wider public.
            I on behalf of the Mekelle Niber Foundation team, would like to
            dearly extend for the contributing partners, friends, and families
            of Niber's Endevours. With out your contribution and dedicated
            efforts, this would have not happened. God bless you all. We
            definitely believe not only Niber's Vision and Mission of realizing
            a recovered and restored Tigrai, but also a more civilized, stable
            and economically strong Tigrai more than ever before. Have a good
            time!!
          </p>
        </div>
      </section>
    </div>
  );
}
