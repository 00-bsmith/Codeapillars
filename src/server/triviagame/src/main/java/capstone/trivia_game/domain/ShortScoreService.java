package capstone.trivia_game.domain;

import capstone.trivia_game.data.ShortScoreJdbcTemplateRepository;
import capstone.trivia_game.models.ScoreEntry;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ShortScoreService {

    private final ShortScoreJdbcTemplateRepository repository;

    public ShortScoreService(ShortScoreJdbcTemplateRepository repository) {
        this.repository = repository;
    }

    public List<ScoreEntry> findAll() {
        return repository.findAll();
    }

    public ScoreEntry findById(int scoreId) {
        return repository.findById(scoreId);
    }

    public Result<ScoreEntry> add(ScoreEntry scoreEntry) {

    }

    public Result<ScoreEntry> update(ScoreEntry scoreEntry) {

    }

    public boolean deleteById(int scoreId) {
        return repository.deleteById(scoreId);
    }

    private Result<ScoreEntry> validate(ScoreEntry scoreEntry) {
        Result<ScoreEntry> result = new Result<>();
        if (scoreEntry == null) {
            result.addMessage("entry cannot be null", ResultType.INVALID);
            return result;
        }

        if (Validations.isNullOrBlank(scoreEntry.getInitials())) {
            result.addMessage("initials cannot be null", ResultType.INVALID);
        }

        if (scoreEntry.getInitials().equalsIgnoreCase("ass") ||
                scoreEntry.getInitials().equalsIgnoreCase("fuc") ||
                scoreEntry.getInitials().equalsIgnoreCase("fuk") ||
                scoreEntry.getInitials().equalsIgnoreCase("fuq") ||
                scoreEntry.getInitials().equalsIgnoreCase("fux") ||
                scoreEntry.getInitials().equalsIgnoreCase("fck") ||
                scoreEntry.getInitials().equalsIgnoreCase("coc") ||
                scoreEntry.getInitials().equalsIgnoreCase("cok") ||
                scoreEntry.getInitials().equalsIgnoreCase("coq") ||
                scoreEntry.getInitials().equalsIgnoreCase("kox") ||
                scoreEntry.getInitials().equalsIgnoreCase("koc") ||
                scoreEntry.getInitials().equalsIgnoreCase("kok") ||
                scoreEntry.getInitials().equalsIgnoreCase("koq") ||
                scoreEntry.getInitials().equalsIgnoreCase("cac") ||
                scoreEntry.getInitials().equalsIgnoreCase("cak") ||
                scoreEntry.getInitials().equalsIgnoreCase("caq") ||
                scoreEntry.getInitials().equalsIgnoreCase("kac") ||
                scoreEntry.getInitials().equalsIgnoreCase("kak") ||
                scoreEntry.getInitials().equalsIgnoreCase("kaq") ||
                scoreEntry.getInitials().equalsIgnoreCase("dic") ||
                scoreEntry.getInitials().equalsIgnoreCase("dik") ||
                scoreEntry.getInitials().equalsIgnoreCase("diq") ||
                scoreEntry.getInitials().equalsIgnoreCase("dix") ||
                scoreEntry.getInitials().equalsIgnoreCase("dck") ||
                scoreEntry.getInitials().equalsIgnoreCase("pns") ||
                scoreEntry.getInitials().equalsIgnoreCase("psy") ||
                scoreEntry.getInitials().equalsIgnoreCase("fag") ||
                scoreEntry.getInitials().equalsIgnoreCase("fgt") ||
                scoreEntry.getInitials().equalsIgnoreCase("ngr") ||
                scoreEntry.getInitials().equalsIgnoreCase("nig") ||
                scoreEntry.getInitials().equalsIgnoreCase("cnt") ||
                scoreEntry.getInitials().equalsIgnoreCase("knt") ||
                scoreEntry.getInitials().equalsIgnoreCase("sht") ||
                scoreEntry.getInitials().equalsIgnoreCase("twt") ||
                scoreEntry.getInitials().equalsIgnoreCase("bch") ||
                scoreEntry.getInitials().equalsIgnoreCase("cum") ||
                scoreEntry.getInitials().equalsIgnoreCase("clt") ||
                scoreEntry.getInitials().equalsIgnoreCase("kum") ||
                scoreEntry.getInitials().equalsIgnoreCase("klt") ||
                scoreEntry.getInitials().equalsIgnoreCase("suc") ||
                scoreEntry.getInitials().equalsIgnoreCase("suk") ||
                scoreEntry.getInitials().equalsIgnoreCase("suq") ||
                scoreEntry.getInitials().equalsIgnoreCase("sck") ||
                scoreEntry.getInitials().equalsIgnoreCase("lic") ||
                scoreEntry.getInitials().equalsIgnoreCase("lik") ||
                scoreEntry.getInitials().equalsIgnoreCase("liq") ||
                scoreEntry.getInitials().equalsIgnoreCase("lck") ||
                scoreEntry.getInitials().equalsIgnoreCase("jiz") ||
                scoreEntry.getInitials().equalsIgnoreCase("jzz") ||
                scoreEntry.getInitials().equalsIgnoreCase("gay") ||
                scoreEntry.getInitials().equalsIgnoreCase("gey") ||
                scoreEntry.getInitials().equalsIgnoreCase("gei") ||
                scoreEntry.getInitials().equalsIgnoreCase("gai") ||
                scoreEntry.getInitials().equalsIgnoreCase("vag") ||
                scoreEntry.getInitials().equalsIgnoreCase("vgn") ||
                scoreEntry.getInitials().equalsIgnoreCase("sjv") ||
                scoreEntry.getInitials().equalsIgnoreCase("fap") ||
                scoreEntry.getInitials().equalsIgnoreCase("prn") ||
                scoreEntry.getInitials().equalsIgnoreCase("jew") ||
                scoreEntry.getInitials().equalsIgnoreCase("joo") ||
                scoreEntry.getInitials().equalsIgnoreCase("gvr") ||
                scoreEntry.getInitials().equalsIgnoreCase("pus") ||
                scoreEntry.getInitials().equalsIgnoreCase("pis") ||
                scoreEntry.getInitials().equalsIgnoreCase("pss") ||
                scoreEntry.getInitials().equalsIgnoreCase("tit") ||
                scoreEntry.getInitials().equalsIgnoreCase("fku") ||
                scoreEntry.getInitials().equalsIgnoreCase("fcu") ||
                scoreEntry.getInitials().equalsIgnoreCase("fqu") ||
                scoreEntry.getInitials().equalsIgnoreCase("hor") ||
                scoreEntry.getInitials().equalsIgnoreCase("slt") ||
                scoreEntry.getInitials().equalsIgnoreCase("jap") ||
                scoreEntry.getInitials().equalsIgnoreCase("wop") ||
                scoreEntry.getInitials().equalsIgnoreCase("kik") ||
                scoreEntry.getInitials().equalsIgnoreCase("kyk") ||
                scoreEntry.getInitials().equalsIgnoreCase("kyc") ||
                scoreEntry.getInitials().equalsIgnoreCase("kyq") ||
                scoreEntry.getInitials().equalsIgnoreCase("dyk") ||
                scoreEntry.getInitials().equalsIgnoreCase("dyq") ||
                scoreEntry.getInitials().equalsIgnoreCase("dyc") ||
                scoreEntry.getInitials().equalsIgnoreCase("kkk") ||
                scoreEntry.getInitials().equalsIgnoreCase("jyz") ||
                scoreEntry.getInitials().equalsIgnoreCase("prk") ||
                scoreEntry.getInitials().equalsIgnoreCase("prc") ||
                scoreEntry.getInitials().equalsIgnoreCase("prq") ||
                scoreEntry.getInitials().equalsIgnoreCase("mic") ||
                scoreEntry.getInitials().equalsIgnoreCase("mik") ||
                scoreEntry.getInitials().equalsIgnoreCase("miq") ||
                scoreEntry.getInitials().equalsIgnoreCase("myc") ||
                scoreEntry.getInitials().equalsIgnoreCase("myq") ||
                scoreEntry.getInitials().equalsIgnoreCase("guc") ||
                scoreEntry.getInitials().equalsIgnoreCase("guk") ||
                scoreEntry.getInitials().equalsIgnoreCase("guq") ||
                scoreEntry.getInitials().equalsIgnoreCase("giz") ||
                scoreEntry.getInitials().equalsIgnoreCase("gzz") ||
                scoreEntry.getInitials().equalsIgnoreCase("sex") ||
                scoreEntry.getInitials().equalsIgnoreCase("sxx") ||
                scoreEntry.getInitials().equalsIgnoreCase("sxi") ||
                scoreEntry.getInitials().equalsIgnoreCase("sxe") ||
                scoreEntry.getInitials().equalsIgnoreCase("sxy") ||
                scoreEntry.getInitials().equalsIgnoreCase("xxx") ||
                scoreEntry.getInitials().equalsIgnoreCase("wac") ||
                scoreEntry.getInitials().equalsIgnoreCase("wak") ||
                scoreEntry.getInitials().equalsIgnoreCase("waq") ||
                scoreEntry.getInitials().equalsIgnoreCase("wck") ||
                scoreEntry.getInitials().equalsIgnoreCase("pot") ||
                scoreEntry.getInitials().equalsIgnoreCase("thc") ||
                scoreEntry.getInitials().equalsIgnoreCase("vaj") ||
                scoreEntry.getInitials().equalsIgnoreCase("vjn") ||
                scoreEntry.getInitials().equalsIgnoreCase("nut") ||
                scoreEntry.getInitials().equalsIgnoreCase("std") ||
                scoreEntry.getInitials().equalsIgnoreCase("lsd") ||
                scoreEntry.getInitials().equalsIgnoreCase("poo") ||
                scoreEntry.getInitials().equalsIgnoreCase("azn") ||
                scoreEntry.getInitials().equalsIgnoreCase("pcp") ||
                scoreEntry.getInitials().equalsIgnoreCase("dmn") ||
                scoreEntry.getInitials().equalsIgnoreCase("orl") ||
                scoreEntry.getInitials().equalsIgnoreCase("anl") ||
                scoreEntry.getInitials().equalsIgnoreCase("ans") ||
                scoreEntry.getInitials().equalsIgnoreCase("muf") ||
                scoreEntry.getInitials().equalsIgnoreCase("mff") ||
                scoreEntry.getInitials().equalsIgnoreCase("phk") ||
                scoreEntry.getInitials().equalsIgnoreCase("phc") ||
                scoreEntry.getInitials().equalsIgnoreCase("phq") ||
                scoreEntry.getInitials().equalsIgnoreCase("xtc") ||
                scoreEntry.getInitials().equalsIgnoreCase("tok") ||
                scoreEntry.getInitials().equalsIgnoreCase("toc") ||
                scoreEntry.getInitials().equalsIgnoreCase("toq") ||
                scoreEntry.getInitials().equalsIgnoreCase("mlf") ||
                scoreEntry.getInitials().equalsIgnoreCase("rac") ||
                scoreEntry.getInitials().equalsIgnoreCase("rak") ||
                scoreEntry.getInitials().equalsIgnoreCase("raq") ||
                scoreEntry.getInitials().equalsIgnoreCase("rck") ||
                scoreEntry.getInitials().equalsIgnoreCase("sac") ||
                scoreEntry.getInitials().equalsIgnoreCase("sak") ||
                scoreEntry.getInitials().equalsIgnoreCase("saq") ||
                scoreEntry.getInitials().equalsIgnoreCase("pms") ||
                scoreEntry.getInitials().equalsIgnoreCase("nad") ||
                scoreEntry.getInitials().equalsIgnoreCase("ndz") ||
                scoreEntry.getInitials().equalsIgnoreCase("nds") ||
                scoreEntry.getInitials().equalsIgnoreCase("wtf") ||
                scoreEntry.getInitials().equalsIgnoreCase("sol") ||
                scoreEntry.getInitials().equalsIgnoreCase("sob") ||
                scoreEntry.getInitials().equalsIgnoreCase("fob") ||
                scoreEntry.getInitials().equalsIgnoreCase("sfu") ||
                scoreEntry.getInitials().equalsIgnoreCase("bum") ||
                scoreEntry.getInitials().equalsIgnoreCase("c0c") ||
                scoreEntry.getInitials().equalsIgnoreCase("c0k") ||
                scoreEntry.getInitials().equalsIgnoreCase("c0q") ||
                scoreEntry.getInitials().equalsIgnoreCase("k0x") ||
                scoreEntry.getInitials().equalsIgnoreCase("k0c") ||
                scoreEntry.getInitials().equalsIgnoreCase("k0k") ||
                scoreEntry.getInitials().equalsIgnoreCase("k0q") ||
                scoreEntry.getInitials().equalsIgnoreCase("d1c") ||
                scoreEntry.getInitials().equalsIgnoreCase("d1k") ||
                scoreEntry.getInitials().equalsIgnoreCase("d1q") ||
                scoreEntry.getInitials().equalsIgnoreCase("d1x") ||
                scoreEntry.getInitials().equalsIgnoreCase("p$y") ||
                scoreEntry.getInitials().equalsIgnoreCase("n1g") ||
                scoreEntry.getInitials().equalsIgnoreCase("$ht") ||
                scoreEntry.getInitials().equalsIgnoreCase("pn$") ||
                scoreEntry.getInitials().equalsIgnoreCase("$uc") ||
                scoreEntry.getInitials().equalsIgnoreCase("$uk") ||
                scoreEntry.getInitials().equalsIgnoreCase("$uq") ||
                scoreEntry.getInitials().equalsIgnoreCase("$ck") ||
                scoreEntry.getInitials().equalsIgnoreCase("l1c") ||
                scoreEntry.getInitials().equalsIgnoreCase("l1k") ||
                scoreEntry.getInitials().equalsIgnoreCase("l1q") ||
                scoreEntry.getInitials().equalsIgnoreCase("j1z") ||
                scoreEntry.getInitials().equalsIgnoreCase("j3w") ||
                scoreEntry.getInitials().equalsIgnoreCase("pu$") ||
                scoreEntry.getInitials().equalsIgnoreCase("pi$") ||
                scoreEntry.getInitials().equalsIgnoreCase("ps$") ||
                scoreEntry.getInitials().equalsIgnoreCase("p$$") ||
                scoreEntry.getInitials().equalsIgnoreCase("p$s") ||
                scoreEntry.getInitials().equalsIgnoreCase("t1t") ||
                scoreEntry.getInitials().equalsIgnoreCase("s3x") ||
                scoreEntry.getInitials().equalsIgnoreCase("$3x") ||
                scoreEntry.getInitials().equalsIgnoreCase("$ex") ||
                scoreEntry.getInitials().equalsIgnoreCase("$xx") ||
                scoreEntry.getInitials().equalsIgnoreCase("$xi") ||
                scoreEntry.getInitials().equalsIgnoreCase("$xe") ||
                scoreEntry.getInitials().equalsIgnoreCase("$xy") ||
                scoreEntry.getInitials().equalsIgnoreCase("sx1") ||
                scoreEntry.getInitials().equalsIgnoreCase("sx3") ||
                scoreEntry.getInitials().equalsIgnoreCase("$x1") ||
                scoreEntry.getInitials().equalsIgnoreCase("$x3") ||
                scoreEntry.getInitials().equalsIgnoreCase("p0t") ||
                scoreEntry.getInitials().equalsIgnoreCase("p00") ||
                scoreEntry.getInitials().equalsIgnoreCase("po0") ||
                scoreEntry.getInitials().equalsIgnoreCase("p0o") ||
                scoreEntry.getInitials().equalsIgnoreCase("$ac") ||
                scoreEntry.getInitials().equalsIgnoreCase("$ak") ||
                scoreEntry.getInitials().equalsIgnoreCase("$aq") ||
                scoreEntry.getInitials().equalsIgnoreCase("$ac") ||
                scoreEntry.getInitials().equalsIgnoreCase("$ak") ||
                scoreEntry.getInitials().equalsIgnoreCase("$aq") ||
                scoreEntry.getInitials().equalsIgnoreCase("pm$") ||
                scoreEntry.getInitials().equalsIgnoreCase("nd$") ||
                scoreEntry.getInitials().equalsIgnoreCase("$ol") ||
                scoreEntry.getInitials().equalsIgnoreCase("$ob") ||
                scoreEntry.getInitials().equalsIgnoreCase("f0b") ||
                scoreEntry.getInitials().equalsIgnoreCase("$fu") ||
                scoreEntry.getInitials().equalsIgnoreCase("an$")
        );

        if (scoreEntry.getScore() < 0) {
            result.addMessage("score cannot be less than 0", ResultType.INVALID);
        }

        if (scoreEntry.getScoreDateTime().isAfter(LocalDateTime.now())) {
            result.addMessage("date cannot be in the future", ResultType.INVALID);
        }

        return result;
    }
}
