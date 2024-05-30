import "../../css/AfterLogin/editAkun.css";

const EditAkun = () => {
  return (
    <>
      <main id='main'>
        <section className='edit-akun container'>
          <div className='card p-4 fw-bold'>
            <h2 className='card-tittle'>Edit Informasi Akun</h2>
            <div className='card-body p-3 col-8'>
              <form action>
                <h4>Nama Lengkap</h4>
                <input type='text' />
                <h4>Tanggal Lahir</h4>
                <input type='date' />
                <h4>Email</h4>
                <input type='text' />
                <button type='submit' className='btn btn-md btn-warning rounded-5 w-25 m-3 float-end'>
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EditAkun;
