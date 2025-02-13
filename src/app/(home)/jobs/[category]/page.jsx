import supabase from "../../../../../lib/config/supabaseClient";
import InfiniteScrollJobs from "@/app/components/job-scroll";
import { fetchJobs } from "@/app/actions/actions";
import Footer from "@/app/components/footer";

export const revalidate = 0;



export default async function Page({ params }) {

    const search = params.category.replace('%20', ' ');

    const jobs = await fetchJobs(undefined, undefined, search);

  return (
    <section className='w-screen flex flex-col justify-center items-center'>
       <InfiniteScrollJobs initialJobs={jobs} search={search} />
       <Footer />
    </section>
  )
}
