function Entry() {
  return (
    <div >
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Type Here" />
          </div>
          <div class="col-4">
            <input type="date" placeholder="Type Here" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
