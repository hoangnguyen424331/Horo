import React,{ useContext }  from 'react'
import { RoomContext } from "./context";

const Extras= ({rooms}) => {
    const context= useContext(RoomContext);
    const {
      handleChange,
      MayLanh,
      TiVi,
      MayGiat,
      ChoDeXe,
      CuaSo,
      BanCong,
      MayLocNuoc,
      LoViSong,
      BepGa,
      TuLanh,
      GacLung
    } = context;
        return(
            <div>
            <div className="form-group">
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="MayLanh"
                  id="MayLanh"
                  checked={MayLanh}
                  onChange={handleChange}
                />
                <label htmlFor="MayLanh">Air-Conditioner</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="TiVi"
                  id="TiVi"
                  checked={TiVi}
                  onChange={handleChange}
                />
                <label htmlFor="TiVi">Television</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="MayGiat"
                  id="MayGiat"
                  checked={MayGiat}
                  onChange={handleChange}
                />
                <label htmlFor="MayGiat">Washing Machine</label>
              </div>
              
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="ChoDeXe"
                  id="ChoDeXe"
                  checked={ChoDeXe}
                  onChange={handleChange}
                />
                <label htmlFor="ChoDeXe">Parking Space</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="CuaSo"
                  id="CuaSo"
                  checked={CuaSo}
                  onChange={handleChange}
                />
                <label htmlFor="CuaSo">Window</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="BanCong"
                  id="BanCong"
                  checked={BanCong}
                  onChange={handleChange}
                />
                <label htmlFor="BanCong">Balcony</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="MayLocNuoc"
                  id="MayLocNuoc"
                  checked={MayLocNuoc}
                  onChange={handleChange}
                />
                <label htmlFor="MayLocNuoc">Water Purifier</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="LoViSong"
                  id="LoViSong"
                  checked={LoViSong}
                  onChange={handleChange}
                />
                <label htmlFor="LoViSong">Microwave</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="BepGa"
                  id="BepGa"
                  checked={BepGa}
                  onChange={handleChange}
                />
                <label htmlFor="BepGa">Gas stove</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="GacLung"
                  id="GacLung"
                  checked={GacLung}
                  onChange={handleChange}
                />
                <label htmlFor="GacLung">Mezzanine</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="TuLanh"
                  id="TuLanh"
                  checked={TuLanh}
                  onChange={handleChange}
                />
                <label htmlFor="TuLanh">Fridge</label>
              </div>
            </div>
            </div>
           
        )
   
}
export default  Extras;